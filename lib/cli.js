/**
 * Created by WindomZ on 17-3-15.
 */
const process = require('process')

const program = require('commander')

const pkg = require('../package.json')
const {processUA, processBrowser} = require('./process')

let noArgs = true

program
  .version(pkg.version)
  .usage('[options] <browser>')
  .description('list of User Agent Strings')
  .option('-l, --limit <limit>', 'limit count of the list', /^\d+$/, -1)
  .option('-f, --format <format>', 'format of the strings', /^.*[*%s]+.*$/, '"%s"')
  .option('-s, --separator <separator>', 'separators of the strings', /^.+$/, ', ')
  .option('--line', 'each string has a newline', null, false)
  .option('--save <file>', 'save to file', /^.+$/, null)
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
