/**
 * Created by WindomZ on 17-3-16.
 */

class UAStrings {

  constructor(title) {
    this._title = title;
    this._list = [];
  }

  push(ua) {
    this._list.push(ua);
  }

  size() {
    return this._list.length;
  }

  title() {
    return this._title
  }

  list() {
    return this._list
  }

  valid() {
    return this._title.length > 0
      && this._list.length > 0;
  }

  toString() {
    let s = '>>> ' + this._title + '\n';
    this._list.forEach(l => s += '--- ' + l + '\n');
    return s;
  }

}

module.exports = UAStrings;