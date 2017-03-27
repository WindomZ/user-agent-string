/**
 * Created by WindomZ on 17-3-16.
 */
const fs = require('fs')
const path = require('path')

const co = require('co')

/**
 * Loop to create a directory structure
 *
 * @param {string} filepath the path of file
 * @api private
 */
function mkdir (filepath) {
  if (!filepath) return
  let dir = path.dirname(filepath)
  if (!fs.existsSync(dir)) mkdir(dir)
  fs.mkdirSync(filepath)
}

/**
 * Save the UAStringsList to a file
 *
 * @param {string} filepath the path of file
 * @param {UAStringsList} list
 * @param {boolean} eol whether to end with os.EOL
 * @return {Object}
 * @api public
 */
function * save (filepath, list = null, eol = false) {
  let result = {
    done: false,
    filepath: ''
  }
  if (!filepath || !list) return result

  result.filepath = path.join(__dirname, path.relative(__dirname, filepath))
  let dir = path.dirname(result.filepath)
  if (!fs.existsSync(dir)) mkdir(dir)
  fs.writeFileSync(result.filepath, list.toString(eol), null)

  result.done = true
  return result
}

module.exports = (filepath, list, eol) => co.wrap(save)(filepath, list, eol)
