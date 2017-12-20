import {Injectable} from '@angular/core';

@Injectable()
export class TabService {

  public _value1: any = 0;
  public _value2: any = 0;

  constructor() {}

  /**
   * GETTERS & SETTERS
   */
  get value1() {
    return this._value1;
  }
  set value1(value1) {
    this._value1 = value1;
  }

  get value2() {
    return this._value2;
  }
  set value2(value2) {
    this._value2 = value2;
  }


  //API

  addValue1() {
    this._value1 = this._value1 + 1;
  }

  substractValue1() {
    this._value1 = this._value1 - 1;
  }

  addValue2() {
    this._value2 = this._value2 + 1;
  }
  substractValue2() {
    this._value2 = this._value2 - 1;
  }

}

