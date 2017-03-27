/**
 * Created by WindomZ on 17-3-17.
 */
const test = require('ava')

const fetch = require('../lib/ua-fetch')

test.serial('Chrome -l 1', async(t) => {
  await fetch({
    limit: 1,
    browser: 'Chrome'
  }).then(list => {
    let r = list.toString()
    t.regex(r, /^"Mozilla.+"/)
    t.pass()
  }).catch(err => t.fail(err))
})

test.serial(`Dillo -l 2 -f '{(*)}'`, async(t) => {
  await fetch({
    format: '{(*)}',
    limit: 2,
    browser: 'Dillo'
  }).then(list => {
    let r = list.toString()
    t.regex(r, /^{\(Dillo\/.+\)},\s{\(Dillo\/.+\)}/)
    t.pass()
  }).catch(err => t.fail(err))
})

test.serial(`Dillo -l 2 -f '(*)' -s '$$'`, async(t) => {
  await fetch({
    format: '(*)',
    separator: '$$',
    limit: 2,
    browser: 'Dillo'
  }).then(list => {
    let r = list.toString()
    t.regex(r, /^\(Dillo\/.+\)\$\$\(Dillo\/.+\)/)
    t.pass()
  }).catch(err => t.fail(err))
})
