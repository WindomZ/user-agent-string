/**
 * Created by WindomZ on 17-3-16.
 */

class UAStrings {

  constructor(title) {
    this.title = title;
    this.list = [];
  }

  addUAString(ua) {
    this.list.push(ua);
  }

  size() {
    return this.list.length;
  }

  title() {
    return this.title
  }

  list() {
    return this.list
  }

  valid() {
    return this.title.length > 0
      && this.list.length > 0;
  }

  toString() {
    let s = '>>> ' + this.title + '\n';
    this.list.forEach(l => s += '--- ' + l + '\n');
    return s;
  }

}

module.exports = UAStrings;