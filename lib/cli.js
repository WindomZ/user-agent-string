/**
 * Created by WindomZ on 17-3-15.
 */
const process = require('process');

const program = require('commander');

const pkg = require('../package.json');
const fetch = require('./ua-fetch');
const save = require('./save');

let noArgs = true;

program
  .version(pkg.version)
  .usage('[options] <browser>')
  .description('list of User Agent Strings')
  .option('-f, --format <format>', 'Format of the strings', /^.*\*+.*$/, '"%s"')
  .option('-s, --separator <separator>', 'List separators', /^.+$/, ', ')
  .option('-l, --limit <limit>', 'Limit count of the list', /^\d+$/, -1)
  .option('--save <file>', 'Save to file', /^.+$/, null)
  .action(browser => {
    noArgs = false;
    fetch({
      format: program.format || '',
      separator: program.separator || '',
      limit: program.limit || -1,
      browser: browser || '',
    }).then(list => {
      if (program.save)
        save(program.save, list)
          .then(bool => console.log(bool ? '写入成功' : '写入失败'))
          .catch(err => console.log('error: ' + err));
    }).catch(err => console.log('error: ' + err));
  })
  .parse(process.argv);

if (noArgs) {
  program.outputHelp();
}
