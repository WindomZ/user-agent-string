/**
 * Created by WindomZ on 17-3-16.
 */
const util = require('util');
const os = require('os');

class UAStringsList {

  /**
   * UAStringsList constructor
   *
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
   * Push UAStrings to list
   *
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

  /**
   * Get list of the UAStrings
   *
   * @return {Array}
   * @api public
   */
  list() {
    return this._list
  }

  valid() {
    return this._list.length > 0;
  }

  /**
   * Get list of the UAStrings formatted string
   *
   * @return {Array}
   * @api public
   */
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

  /**
   * Get a formatted string
   *
   * @return {string}
   * @api public
   */
  toString(eol = false) {
    let sep = this._separator + (eol ? os.EOL : '');
    return this.toList().join(sep) + os.EOL;
  }

}

module.exports = UAStringsList;