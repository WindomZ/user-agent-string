/**
 * Created by WindomZ on 17-3-17.
 */
const test = require('ava')

test.serial('test', t => {
  let r = '(Dillo/2.0), (Dillo/0.8.6-i18n-misc)'
  t.regex(r, /^\(Dillo\/.+\),\s\(Dillo\/.+\)/)
  t.pass()
})
