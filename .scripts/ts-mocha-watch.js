var join = require('path').join;
var dirname = require('path').dirname;
var basename = require('path').basename;
var Linter = require('tslint').Linter;
var loadConfigurationFromPath = require('tslint/lib/configuration').loadConfigurationFromPath;
var fs = require('fs')
var expand = require('glob-expand');
var Mocha = require('mocha');

// ad-hoc file watching
// reruns tests and lists files

var defaultSrcPatterns = ['src/*.ts', 'src/**/*.ts', '!src/*.test.ts', '!src/**/*.test.ts']
var defaultTestPatterns = ['src/*.test.ts', 'src/**/*.test.ts']

function watch(rootPath, srcPatterns, testPatterns) {
  var srcPath = join(rootPath, 'src')

  srcPatterns = srcPatterns || defaultSrcPatterns
  testPatterns = testPatterns || defaultTestPatterns

  function findFiles(patterns, filter = 'isFile') {
    return expand({ filter, cwd: rootPath }, patterns).map(file => join(rootPath, file))
  }

  require('ts-node/register')

  var tslintConfig = loadConfigurationFromPath(join(rootPath, 'tslint.json'));

  var srcDirectories = findFiles(['src/**/*'], 'isDirectory').concat(srcPath)
  var srcFiles = findFiles(srcPatterns)
  var testFiles = findFiles(testPatterns)

  // cleans up files to allow re-running of tests
  function destroyCache() {
    findFiles([ 'src/*.ts', 'src/**/*.ts' ]).forEach(file => {
      delete require.cache[file]
    })
  }

  function runTest(f, msg, file) {
    try {
      clearConsole()
      var mocha = new Mocha()

      if (!file) { // add all files if not provided
        console.log(msg)

        return testFiles
          .reduce((m, file) => m.addFile(file), mocha.reporter('dot'))
          .run(function () {
            destroyCache()
            f()
          })
      }

      console.log(`Running test file: ${replace(file)}...`)

      return mocha.addFile(file).run(function () {
        destroyCache()
        f()
      })
    } catch (e) {
      destroyCache()
      console.error(e)
    }
  }

  function lint(files) {
    try {
      if (files.length === 1) {
        console.log(`Linting ${replace(files[0])}...`)
      } else {
        console.log('Linting files...')
      }

      var linter = new Linter({ fix: true });

      files.forEach(file => {
        linter.lint(file, fs.readFileSync(file).toString(), tslintConfig)
      })

      var result = linter.getResult()

      if (result.failureCount > 0) {
        process.stderr.write(result.output);
      } else if (result.output) {
        process.stdout.write(result.output);
      } else {
        if (files.length === 1) {
          console.log(`Linting ${replace(files[0])} was successful`)
        } else {
          console.log(`Linting was successful`)
        }
      }
    } catch (e) {
      destroyCache()
      console.error(e)
    }

  }

  runTest(function () {
    lint(srcFiles.concat(testFiles))

    console.log('\nWaiting for changes...')

    srcDirectories.forEach(watchDirectory)
  }, `Running tests...`)

  function watchDirectory(dir) {
    var id

    fs.watch(dir, function (event, filename) {
      clearTimeout(id) // most file changes result in 2 updates, ensures only 1 execution

      var file = join(dir, filename)

      if (file.indexOf('.test.ts') > -1 && testFiles.indexOf(file) === -1) {
        testFiles.push(file)
      }

      if (!fs.existsSync(file)) {
        destroyCache()
        srcDirectories = findFiles(['src/**/*'], 'isDirectory').concat(srcPath)
        srcFiles = findFiles(srcPatterns)
        testFiles = findFiles(testPatterns)
        return
      }

      if (fs.lstatSync(file).isDirectory()) {
        srcDirectories.push(file)
        watchDirectory(file)
        return
      }

      var testFile = getTestFile(file)

      var msg = testFile
        ? `Running test file: ${replace(file)} ...`
        : `No associated test for file ${replace(file)}, to be safe, re-running all tests...`

      id = setTimeout(function () {
        runTest(function () {
          lint([file])
        }, msg, testFile)
      }, 100)
    })
  }

  function replace(file) {
    return file.replace(rootPath + '/', '')
  }

  function clearConsole() {
    console.log('\x1Bc')
  }

  function getTestFile(file) {
    if (testFiles.indexOf(file) > -1)
      return file

    if (testFiles.indexOf(file.replace('.ts', '.test.ts')) > -1)
      return file.replace('.ts', '.test.ts')

    var x = dirname(file)
    var y = basename(x)
    file = join(x , `${y}.test.ts`)

    if (testFiles.indexOf(file) > -1)
      return file

    return null
  }
}

watch(join(__dirname, '..'))
