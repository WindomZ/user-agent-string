/**
 * Created by WindomZ on 17-3-16.
 */
'use strict'

class UAStrings {
  /**
   * UAStrings constructor
   *
   * @param {string} title
   * @api public
   */
  constructor (title) {
    this._title = title.trim()
    this._list = []
  }

  /**
   * Push us string to list
   *
   * @param {string} ua
   * @api public
   */
  push (ua) {
    this._list.push(ua.trim())
  }

  list () {
    return this._list
  }

  valid () {
    return this._title.length > 0 &&
      this._list.length > 0
  }

  /**
   * Get a formatted string, for the debug
   *
   * @return {string}
   * @api public
   */
  // toString () {
  //   let s = '>>> ' + this._title + '\n'
  //   this._list.forEach(l => (s += '--- ' + l + '\n'))
  //   return s
  // }
}

module.exports = UAStrings
