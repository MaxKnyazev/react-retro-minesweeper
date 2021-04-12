class Data {
  _w = 12
  _h = 12
  _m = 28

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
  
  get m () {
    return this._m;
  }

  set m(value) {
    this._m = value;
  }
}

export default new Data();