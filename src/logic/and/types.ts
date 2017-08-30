export interface And {
  (a: true, b: true): true;
  (a: false, b: false): false;
  (a: false, b: true): false;
  (a: true, b: false): false;

  (a: boolean, b: true): boolean
  (a: boolean, b: false): false;
  (a: true, b: boolean): boolean
  (a: false, b: boolean): false;
  (a: boolean, b: boolean): boolean

  (a: true): AndT
  (a: false): AndF
  (a: boolean): AndBool
}

export interface AndT {
  (b: true): true;
  (b: false): false;
  (b: boolean): boolean
}

export interface AndF {
  (b: true): false;
  (b: false): false;
  (b: boolean): false
}

export interface AndBool {
  (b: true): boolean
  (b: false): false;
  (b: boolean): boolean
}
