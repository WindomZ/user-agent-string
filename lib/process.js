/**
 * Created by WindomZ on 17-3-17.
 */
'use strict'

const process = require('process')
const os = require('os')

require('colors')

const fetchUA = require('./ua-fetch')
const save = require('./save')

const fetchBrowser = require('./ua-browser')
const select = require('./select')

function processUA (browser, options) {
  fetchUA({
    format: options.format || '',
    separator: options.separator || '',
    limit: options.limit || -1,
    line: options.line || false,
    browser: browser || ''
  }).then(list => {
    if (options.save) {
      save(options.save, list, options.line)
        .then(result => process.stdout.write(
          (result.done ? result.filepath.yellow + os.EOL : '') +
          (result.done ? 'Saved successfully!'.green : 'Saved failed!'.red) + os.EOL))
        .catch(err => console.error(err))
    } else {
      process.stdout.write(list.toString(options.line).yellow)
    }
  }).catch(err => console.error(err))
}

function processBrowser (search = '', options, fn) {
  fetchBrowser({
    search: search
  }).then(list => {
    if (!list || list.length <= 0) {
      process.stdout.write('Did not match any browser about '.yellow + search.underline + os.EOL)
    } else if (options.print) {
      process.stdout.write((list.join(os.EOL) + os.EOL).yellow)
    } else {
      select([{
        type: 'list',
        name: 'browser',
        message: 'Please select the browser:',
        choices: list
      }]).then(answer => fn ? fn(answer.browser) : process.stdout.write((answer.browser + os.EOL).green))
    }
  }).catch(err => console.error(err))
}

module.exports = { processUA, processBrowser }
