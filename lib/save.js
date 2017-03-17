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
  let result = {
    done: false,
    filepath: ''
  };
  if (!filename || !list) return result;

  result.filepath = path.join(__dirname, path.relative(__dirname, filename));
  let dir = path.dirname(result.filepath);
  if (!fs.existsSync(dir)) mkdir(dir);
  fs.writeFileSync(result.filepath, list.toString(eol), null);

  result.done = true;
  return result;
}

module.exports = save;