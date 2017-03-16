/**
 * Created by WindomZ on 17-3-16.
 */
const util = require('util');

class UAList {

  /**
   * @param {string} format
   * @param {int} limit
   * @api public
   */
  constructor(format = '', limit = -1) {
    if (format && format.includes('*')) {
      format = format.replace('*', '%s');
    }
    this._format = format ? format : '"%s"';
    this._limit = limit;
    this._list = [];
    this._size = 0;
  }

  /**
   * @param {UAStrings} ua
   * @api public
   */
  push(ua) {
    if (ua.valid()) {
      this._list.push(ua);
      this._size += ua.size();
    }
  }

  size() {
    return this._size;
  }

  list() {
    return this._list
  }

  valid() {
    return this._list.length > 0;
  }

  toList() {
    let list = [];
    this._list.forEach(_l => {
      _l.list().forEach(l => {
        list.push(util.format(this._format, l));
        if (this._limit > 0 && list.length >= this._limit) {
          return list;
        }
      });
    });
    return list;
  }

  toString() {
    return '[' + this.toList().join(",") + ']';
  }

}

module.exports = UAList;