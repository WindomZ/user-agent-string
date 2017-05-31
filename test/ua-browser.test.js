/**
 * Created by WindomZ on 17-3-18.
 */
'use strict'

const test = require('ava')

const fetch = require('../lib/ua-browser')

test.serial('browser search se', async(t) => {
  await fetch({
    search: 'se'
  }).then(list => {
    list.forEach(l => t.regex(l.toLowerCase(), /se/))
    t.pass()
  }).catch(err => t.fail(err))
})

test.serial('browser search di', async(t) => {
  await fetch({
    search: 'di'
  }).then(list => {
    list.forEach(l => t.regex(l.toLowerCase(), /di/))
    t.pass()
  }).catch(err => t.fail(err))
})
