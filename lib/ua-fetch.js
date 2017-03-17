/**
 * Created by WindomZ on 17-3-16.
 */
const axios = require('axios');
const cheerio = require('cheerio');

const UAStringsList = require('./ua-string-list');
const UAStrings = require('./ua-string');

/**
 * Fetch the list of User Agent Strings.
 *
 * @param {Object} param
 * @return {UAStringsList}
 * @api public
 */
async function fetch(param) {
  let list = new UAStringsList(param.format, param.separator, param.limit);

  param.browser = param.browser.match(/[a-zA-Z_0-9-\s]+/)[0] || '';
  if (!param.browser) return list;

  await axios.get('http://www.useragentstring.com/pages/useragentstring.php', {
    params: {
      name: param.browser
    }
  }).then(response => {
    let $ = cheerio.load(response.data);
    $('div#liste h4').each(function () {
      let ua = new UAStrings($(this).text());
      $(this).next('ul').find('a').each(function () {
        ua.push($(this).text())
      });
      list.push(ua);
    });
  }).catch(error => {
    throw error;
  });

  return list;
}

module.exports = fetch;