/**
 * Created by WindomZ on 17-3-17.
 */
'use strict'

const axios = require('axios')
const cheerio = require('cheerio')
const co = require('co')

/**
 * Fetch the list of browsers.
 *
 * @param {Object} param
 * @return {UAStringsList}
 * @api public
 */
function * fetch (param) {
  param = {
    search: param.search ? param.search.toLowerCase() : ''
  }
  let list = []

  yield axios
    .get('http://www.useragentstring.com/pages/useragentstring.php')
    .then(response => {
      let $ = cheerio.load(response.data)
      $('table#auswahl tr a.unterMenuTitel').each(function () {
        if ($(this).text().includes('BROWSERS')) {
          $(this).nextAll('a.unterMenuName').each(function () {
            let browser = $(this).text().trim()
            if (param.search && !browser.toLowerCase().includes(param.search)) {
              return true
            }
            list.push(browser)
          })
          return false
        }
      })
    })
    .catch(error => {
      throw error
    })

  return list
}

module.exports = param => co.wrap(fetch)(param)
