<a name="0.30.0"></a>
# [0.30.0](https://github.com/TylorS/167/compare/v0.29.0...v0.30.0) (2017-06-07)


### Bug Fixes

* **remove:** return unchanged list on index >= length ([0f1668c](https://github.com/TylorS/167/commit/0f1668c)), closes [#1](https://github.com/TylorS/167/issues/1)


### BREAKING CHANGES

* **remove:** Before:
`remove(3, 1, [ 1, 2, 3 ]) => Range Error`

After:
`remove(3, 1, [ 1, 2, 3 ]) => [ 1, 2, 3 ]`



<a name="0.29.0"></a>
# [0.29.0](https://github.com/TylorS/167/compare/v0.28.0...v0.29.0) (2017-06-05)


### Features

* **lenses:** relax type restriction on Lens ([44a4000](https://github.com/TylorS/167/commit/44a4000))



<a name="0.28.0"></a>
# [0.28.0](https://github.com/TylorS/167/compare/v0.27.0...v0.28.0) (2017-06-05)


### Bug Fixes

* **pluck:** update type signature ([e024cf5](https://github.com/TylorS/167/commit/e024cf5))


### Features

* **lenses:** implement lens ([3e6e894](https://github.com/TylorS/167/commit/3e6e894))
* **lenses:** implement lenses ([78c2e8d](https://github.com/TylorS/167/commit/78c2e8d))



<a name="0.27.0"></a>
# [0.27.0](https://github.com/TylorS/167/compare/v0.26.0...v0.27.0) (2017-05-27)


### Features

* **Maybe:** use interfaces for Just and Nothing ([328a102](https://github.com/TylorS/167/commit/328a102))



<a name="0.26.0"></a>
# [0.26.0](https://github.com/TylorS/167/compare/v0.25.0...v0.26.0) (2017-05-27)


### Features

* **object:** implement keys and values ([90a2a80](https://github.com/TylorS/167/commit/90a2a80))



<a name="0.25.0"></a>
# [0.25.0](https://github.com/TylorS/167/compare/v0.24.0...v0.25.0) (2017-05-26)


### Features

* **maybe:** implement fromMaybe ([56c946b](https://github.com/TylorS/167/commit/56c946b))



<a name="0.24.0"></a>
# [0.24.0](https://github.com/TylorS/167/compare/v0.23.0...v0.24.0) (2017-05-26)


### Features

* **logic:** implement many logic functions ([9640431](https://github.com/TylorS/167/commit/9640431))



<a name="0.23.0"></a>
# [0.23.0](https://github.com/TylorS/167/compare/v0.22.0...v0.23.0) (2017-05-26)


### Features

* **math:** implement math-related functions ([7505bf1](https://github.com/TylorS/167/commit/7505bf1))



<a name="0.22.0"></a>
# [0.22.0](https://github.com/TylorS/167/compare/v0.21.0...v0.22.0) (2017-05-25)


### Features

* **onlyWhen:** add onlyWhen ([a183cb2](https://github.com/TylorS/167/commit/a183cb2))



<a name="0.21.0"></a>
# [0.21.0](https://github.com/TylorS/167/compare/v0.20.0...v0.21.0) (2017-05-22)


### Features

* **maybe:** make Maybe type easily (de)serializable ([3b5508e](https://github.com/TylorS/167/commit/3b5508e))



<a name="0.20.0"></a>
# [0.20.0](https://github.com/TylorS/167/compare/v0.19.0...v0.20.0) (2017-05-22)


### Bug Fixes

* **maybe:** fix isJust and isNothing types ([ff6da2a](https://github.com/TylorS/167/commit/ff6da2a))



<a name="0.19.0"></a>
# [0.19.0](https://github.com/TylorS/167/compare/v0.18.0...v0.19.0) (2017-05-22)


### Features

* **Maybe:** implement Maybe data type ([32f322c](https://github.com/TylorS/167/commit/32f322c))



<a name="0.18.0"></a>
# [0.18.0](https://github.com/TylorS/167/compare/v0.17.0...v0.18.0) (2017-05-22)


### Bug Fixes

* **object:** return updated object ([e15db2d](https://github.com/TylorS/167/commit/e15db2d))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/TylorS/167/compare/v0.16.0...v0.17.0) (2017-05-19)


### Bug Fixes

* **list:** make index functions optional ([83b9cfa](https://github.com/TylorS/167/commit/83b9cfa))
* **reduce:** fix reducer type ([3e85708](https://github.com/TylorS/167/commit/3e85708))


### Features

* **string:** add toLowerCase and toUpperCase ([e8ba5a4](https://github.com/TylorS/167/commit/e8ba5a4))



<a name="0.16.0"></a>
# [0.16.0](https://github.com/TylorS/167/compare/v0.15.0...v0.16.0) (2017-05-15)



<a name="0.15.0"></a>
# [0.15.0](https://github.com/TylorS/167/compare/v0.14.0...v0.15.0) (2017-05-15)


### Bug Fixes

* **join:** handle empty array ([9755557](https://github.com/TylorS/167/commit/9755557))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/TylorS/167/compare/v0.13.0...v0.14.0) (2017-05-09)


### Features

* **logic:** implement logic functions ([3e3b020](https://github.com/TylorS/167/commit/3e3b020))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/TylorS/167/compare/v0.12.0...v0.13.0) (2017-05-01)


### Features

* **function:** implement tryCatch ([0e6630b](https://github.com/TylorS/167/commit/0e6630b))



<a name="0.12.0"></a>
# [0.12.0](https://github.com/TylorS/167/compare/v0.11.0...v0.12.0) (2017-04-28)


### Bug Fixes

* **list:** add more test cases for remove ([86b87aa](https://github.com/TylorS/167/commit/86b87aa))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/TylorS/167/compare/v0.10.0...v0.11.0) (2017-04-28)


### Bug Fixes

* **list:** fix array length errors in remove ([3074995](https://github.com/TylorS/167/commit/3074995))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/TylorS/167/compare/v0.9.0...v0.10.0) (2017-04-28)


### Features

* **object:** implement propEq ([3fd1aaa](https://github.com/TylorS/167/commit/3fd1aaa))



<a name="0.9.0"></a>
# [0.9.0](https://github.com/TylorS/167/compare/v0.8.0...v0.9.0) (2017-04-28)


### Bug Fixes

* **function:** fix type signature for pipe ([d8ba3ad](https://github.com/TylorS/167/commit/d8ba3ad))


### Features

* **function:** implement pipe ([cf1c0c5](https://github.com/TylorS/167/commit/cf1c0c5))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/TylorS/167/compare/v0.7.0...v0.8.0) (2017-04-28)


### Features

* **function:** implement partial function ([49fae04](https://github.com/TylorS/167/commit/49fae04))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/TylorS/167/compare/v0.6.0...v0.7.0) (2017-04-08)


### Bug Fixes

* **build:** remove lib folders before publishing ([7ed4bec](https://github.com/TylorS/167/commit/7ed4bec))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/TylorS/167/compare/v0.5.0...v0.6.0) (2017-04-08)


### Features

* **object:** implement immutable set ([03a8377](https://github.com/TylorS/167/commit/03a8377))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/TylorS/167/compare/v0.4.0...v0.5.0) (2017-04-05)


### Features

* **function:** implement curryN ([9be7084](https://github.com/TylorS/167/commit/9be7084))
* **function:** implement descend function ([e93adc1](https://github.com/TylorS/167/commit/e93adc1))
* **function:** implement flip ([f5ecafe](https://github.com/TylorS/167/commit/f5ecafe))
* **function:** implement invoker ([ebfd51c](https://github.com/TylorS/167/commit/ebfd51c))
* **function:** implement memoize function ([7fb1f7e](https://github.com/TylorS/167/commit/7fb1f7e))
* **relation:** implement equality functions ([5a0f402](https://github.com/TylorS/167/commit/5a0f402))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/TylorS/167/compare/v0.3.0...v0.4.0) (2017-04-03)


### Features

* **object:** implement clone function ([90c826c](https://github.com/TylorS/167/commit/90c826c))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/TylorS/167/compare/v0.2.0...v0.3.0) (2017-04-03)


### Features

* **curry:** reimplement curry locally ([ff77d9f](https://github.com/TylorS/167/commit/ff77d9f))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/TylorS/167/compare/v0.1.0...v0.2.0) (2017-03-31)


### Features

* **curry:** export curry functions ([a332be4](https://github.com/TylorS/167/commit/a332be4))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/TylorS/167/compare/66fbc10...v0.1.0) (2017-03-31)


### Bug Fixes

* **zipWith:** exports from index.ts ([43aefbd](https://github.com/TylorS/167/commit/43aefbd))


### Features

* **77:** initial upload ([66fbc10](https://github.com/TylorS/167/commit/66fbc10))
* **function:** begin implementing function functions :smile: ([b2ccc1d](https://github.com/TylorS/167/commit/b2ccc1d))
* **list:** complete list functions ([40f5618](https://github.com/TylorS/167/commit/40f5618))
* **list:** implement uniqBy ([77b5b49](https://github.com/TylorS/167/commit/77b5b49))
* **list:** implement uniqWith ([3d3fc6c](https://github.com/TylorS/167/commit/3d3fc6c))



