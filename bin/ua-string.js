#!/usr/bin/env node
/**
 * Created by WindomZ on 17-3-15.
 */
'use strict'

const program = require('commander')

const { processUA, processBrowser } = require('../lib/process')

let noArgs = true

program
  .version(require('../package.json').version)
  .usage('[options] <browser>')
  .description('list of User Agent Strings')
  .option('-l, --limit <limit>', 'limit count of the list', /^\d+$/i, -1)
  .option('-f, --format <format>', 'format of the strings', /^.*[*%s]+.*$/i, '"%s"')
  .option('-s, --separator <separator>', 'separators of the strings', /^.+$/i, ', ')
  .option('--line', 'each string has a newline', null, false)
  .option('--save <file>', 'save to file', /^.+$/i, null)
  .action((browser, options) => {
    noArgs = false
    processUA(browser, options)
  })

program
  .command('search <keyword>')
  .alias('find')
  .description('search and select the browser to get list of User Agent Strings')
  .option('-p, --print', 'print the list of User Agent Strings', null, false)
  .action((keyword, options) => {
    noArgs = false
    processBrowser(keyword, options, browser => {
      let args = []
      program.rawArgs.forEach(arg => {
        if (arg === 'find' || arg === 'search') {
          args.push(browser)
        } else if (arg !== keyword) {
          args.push(arg)
        }
      })
      program.parse(args)
    })
  })

program
  .command('list [keyword]')
  .alias('ls')
  .description('list and select the browser to get list of User Agent Strings')
  .option('-p, --print', 'print the list of User Agent Strings', null, false)
  .action((keyword, options) => {
    noArgs = false
    processBrowser(keyword, options, browser => {
      let args = []
      program.rawArgs.forEach(arg => {
        if (arg === 'ls' || arg === 'list') {
          args.push(browser)
        } else {
          args.push(arg)
        }
      })
      program.parse(args)
    })
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
