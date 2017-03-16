/**
 * Created by WindomZ on 17-3-16.
 */
const fs = require('fs');
const path = require('path');

function mkdir(filename) {
  if (!filename) return;
  let dir = path.dirname(filename);
  if (!fs.existsSync(dir)) mkdir(dir);
  fs.mkdirSync(filename);
}

async function save(filename, list = null, eol = false) {
  if (!filename || !list) return false;

  let filepath = path.join(__dirname, path.relative(__dirname, filename));
  let dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) mkdir(dir);
  fs.writeFileSync(filepath, list.toString(eol), null);

  return true;
}

module.exports = save;