/**
 * Created by WindomZ on 17-3-16.
 */
const fs = require('fs');
const path = require('path');


async function save(filename, list = null, eol = false) {
  if (!filename || !list) return false;

  await fs.writeFileSync(
    path.join(__dirname, path.relative(__dirname, filename)),
    list.toString(eol),
    null);

  return true;
}

module.exports = save;