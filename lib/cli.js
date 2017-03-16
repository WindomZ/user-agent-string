/**
 * Created by WindomZ on 17-3-15.
 */
const process = require('process');

const program = require('commander');

const pkg = require('../package.json');
const fetchUA = require('./ua-fetch');
require('./ua-string');

let noArgs = true;

program
  .version(pkg.version)
  .usage('[options] <browser>')
  .description('get list of User Agent Strings')
  .option('-f, --format <format>', 'Format', null, null)
  .option('-s, --save <file>', 'Save', null, null)
  .option('-c, --count <count>', 'Count', null, null)
  .action(browser => {
    noArgs = false;
    fetchUA({
      format: program.format || '',
      save: program.save || '',
      browser: browser || '',
    }).then(list => {
      // console.log(list.length);
      list.forEach(l => console.log(l.toString()));
    }).catch(err => console.log(err));
  })
  .parse(process.argv);

if (noArgs) {
  program.outputHelp();
}
