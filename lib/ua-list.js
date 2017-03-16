/**
 * Created by WindomZ on 17-3-16.
 */
const util = require('util');
const os = require('os');

class UAList {

  /**
   * @param {string} format
   * @param {string} separator
   * @param {int} limit
   * @api public
   */
  constructor(format = '', separator, limit = -1) {
    if (format) format = format.replace('*', '%s');
    this._format = format.includes('%s') ? format : '"%s"';
    this._separator = separator ? separator : ', ';
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
    let cont = false;
    this._list.every(_l => {
      _l.list().every(l => {
        list.push(util.format(this._format, l));
        cont = this._limit <= 0 || list.length < this._limit;
        return cont;
      });
      return cont;
    });
    return list;
  }

  toString(eol = false) {
    let sep = this._separator + (eol ? os.EOL : '');
    return this.toList().join(sep);
  }

}

module.exports = UAList;