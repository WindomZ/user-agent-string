/**
 * Created by WindomZ on 17-3-17.
 */
'use strict'

const co = require('co')

const inquirer = require('inquirer')

function * select (questions) {
  return yield inquirer.prompt(questions)
}

module.exports = questions => co.wrap(select)(questions)
