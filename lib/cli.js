/**
 * Created by WindomZ on 17-3-15.
 */
const process = require('process');

const program = require('commander');

const pkg = require('../package.json');
const fetch = require('./ua-fetch');

let noArgs = true;

program
  .version(pkg.version)
  .usage('[options] <browser>')
  .description('list of User Agent Strings')
  .option('-f, --format <format>', 'Format of the strings', /^.*\*+.*$/, '"%s"')
  .option('-s, --separator <separator>', 'List separators', /^.+$/, ', ')
  .option('-l, --limit <limit>', 'Limit count of the list', /^\d+$/, -1)
  .option('--save <file>', 'Save to file', undefined, undefined)
  .action(browser => {
    noArgs = false;
    fetch({
      format: program.format || '',
      separator: program.separator || '',
      limit: program.limit || -1,
      save: program.save || '',
      browser: browser || '',
    }).then(list => {
      console.log(list.toString());
    }).catch(err => console.log(err));
  })
  .parse(process.argv);

if (noArgs) {
  program.outputHelp();
}
