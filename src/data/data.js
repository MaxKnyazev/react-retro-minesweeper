class Data {
  _w = 12
  _h = 12
  _b = 28
  _c = 0

  get w () {
    return this._w;
  }
  
  set w(value) {
    this._w = value;
  }
  
  get h () {
    return this._h;
  }

  set h(value) {
    this._h = value;
  }
  
  get b () {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  get c () {
    return this._c;
  }
  
  set c(value) {
    this._c = value;
  }
}

export default new Data();