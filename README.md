# user-agent-string

Easy way to get User Agent Strings in command line interface.

![v0.4.1](https://img.shields.io/badge/version-v0.4.1-orange.svg)
![status](https://img.shields.io/badge/status-beta-yellow.svg)

The User Agent Strings source comes from [useragentstring.com](http://www.useragentstring.com/pages/useragentstring.php)

## Features

- [x] Custom User Agent Strings format and separator
- [x] Limit the number of User Agent Strings
- [x] Save the User Agent Strings to a file
- [x] User Agent Strings wraps to increase readability
- [ ] List the supported browsers to select

## Installation

```bash
npm install -g user-agent-string
```

## Usage

**ua-string** is short for *User Agent Strings*

```bash
$ ua-string -h

  Usage: ua-string [options] <browser>

  list of User Agent Strings

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -l, --limit <limit>          limit count of the list
    -f, --format <format>        format of the strings
    -s, --separator <separator>  separators of the strings
    --line                       each string has a newline
    --save <file>                save to file
```

### -l, --limit `<limit>`

Limit the number of User Agent Strings. 

`-l 1` limit is `1`, `-l 10` limit is `10`, etc.
Examples can be found in the following.

### -f, --format `<format>`

Customize the string format, depending on your needs. 

The rule is to use `*` to replace `%s`, very **simple**, 
default format is `"*"`, same as `-f '"*"'`, e.g.

```bash
$ ua-string Chrome -l 1 # default
# >>> "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"

$ ua-string Chrome -l 1 -f '<*>'
# >>> <Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36>

$ ua-string Chrome -l 1 -f '{(*)}'
# >>> {(Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36)}
```

TODO: You can also use `%s`, e.g. `-f '<%s>'`, `-f '{(%s)}'`. 

### -s, --separator `<separator>`

Customize the string separator, depending on your needs. 

The rule also very **simple**, default separator is `, `, e.g.

```bash
$ ua-string Dillo -l 5 # default
# >>> "Dillo/2.0", "Dillo/0.8.6-i18n-misc", "Dillo/0.8.6", "Dillo/0.8.5-i18n-misc", "Dillo/0.8.5"

$ ua-string Dillo -l 5 -s ' | '
# >>> "Dillo/2.0" | "Dillo/0.8.6-i18n-misc" | "Dillo/0.8.6" | "Dillo/0.8.5-i18n-misc" | "Dillo/0.8.5"

$ ua-string Dillo -l 5 -s '&'
# >>> "Dillo/2.0"&"Dillo/0.8.6-i18n-misc"&"Dillo/0.8.6"&"Dillo/0.8.5-i18n-misc"&"Dillo/0.8.5"
```

### --line

User Agent Strings wraps to increase readability.

*Not* use `--line`: 
```bash
$ ua-string Dillo -l 3
# >>> "Dillo/2.0", "Dillo/0.8.6-i18n-misc", "Dillo/0.8.6"
```

Use `--line`: 
```bash
$ ua-string Dillo -l 3 --line
# >>> "Dillo/2.0", 
      "Dillo/0.8.6-i18n-misc", 
      "Dillo/0.8.6"
```

### --save `<file>`

TODO: Writing...

## License

The [MIT License](https://github.com/WindomZ/user-agent-string/blob/master/LICENSE)
