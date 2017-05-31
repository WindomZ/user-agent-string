/**
 * Created by WindomZ on 17-3-16.
 */
'use strict'

const axios = require('axios')
const cheerio = require('cheerio')
const co = require('co')

const UAStringsList = require('./ua-string-list')
const UAStrings = require('./ua-string')

/**
 * Fetch the list of User Agent Strings.
 *
 * @param {Object} param
 * @return {UAStringsList}
 * @api public
 */
function * fetch (param) {
  param = {
    format: param.format || '',
    separator: param.separator || '',
    limit: param.limit || -1,
    line: param.line || false,
    browser: param.browser.match(/[a-zA-Z_0-9-\s]+/)[0] || ''
  }
  let list = new UAStringsList(param.format, param.separator, param.limit)

  if (!param.browser) return list

  yield axios
    .get('http://www.useragentstring.com/pages/useragentstring.php', {
      params: {
        name: param.browser
      }
    })
    .then(response => {
      let $ = cheerio.load(response.data)
      $('div#liste h4').each(function () {
        let ua = new UAStrings($(this).text())
        $(this).next('ul').find('a').each(function () {
          ua.push($(this).text())
        })
        list.push(ua)
      })
    })
    .catch(error => {
      throw error
    })

  return list
}

module.exports = param => co.wrap(fetch)(param)
