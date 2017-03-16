/**
 * Created by WindomZ on 17-3-15.
 */
const process = require('process');

const program = require('commander');
require('colors');

const pkg = require('../package.json');
const fetch = require('./ua-fetch');
const save = require('./save');

let noArgs = true;

program
  .version(pkg.version)
  .usage('[options] <browser>')
  .description('list of User Agent Strings')
  .option('-f, --format <format>', 'format of the strings', /^.*\*+.*$/, '"%s"')
  .option('-s, --separator <separator>', 'separators of the strings', /^.+$/, ', ')
  .option('-l, --limit <limit>', 'limit count of the list', /^\d+$/, -1)
  .option('--save <file>', 'save to file', /^.+$/, null)
  .option('--line', 'each string has a newline', null, false)
  .action(browser => {
    noArgs = false;
    fetch({
      format: program.format || '',
      separator: program.separator || '',
      limit: program.limit || -1,
      line: program.line || false,
      browser: browser || '',
    }).then(list => {
      if (program.save) {
        save(program.save, list, program.line)
          .then(bool => process.stdout.write(
            (bool ? 'Saved successfully!'.green : 'Save failed!'.red) + `\n`))
          .catch(err => console.error(err));
      } else {
        process.stdout.write(list.toString(program.line).yellow);
      }
    }).catch(err => console.error(err));
  })
  .parse(process.argv);

if (noArgs) {
  program.outputHelp();
}
