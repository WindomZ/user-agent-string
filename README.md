# user-agent-string

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/user-agent-string.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/user-agent-string.svg?branch=master)](https://travis-ci.org/WindomZ/user-agent-string)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/user-agent-string/badge.svg?branch=master)](https://coveralls.io/github/WindomZ/user-agent-string?branch=master)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E=6-blue.svg?style=flat-square)
[![Dependency](https://david-dm.org/WindomZ/user-agent-string.svg)](https://david-dm.org/WindomZ/user-agent-string)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

> Easy way to get User Agent Strings in command line interface.

[![NPM](https://nodei.co/npm/user-agent-string.png)](https://nodei.co/npm/user-agent-string/)

[![user-agent-string](https://img.shields.io/npm/v/user-agent-string.svg)](https://www.npmjs.com/package/user-agent-string)
![status](https://img.shields.io/badge/status-stable-green.svg)

The User Agent Strings data comes from [useragentstring.com](http://www.useragentstring.com/pages/useragentstring.php)

## Features

- [x] Custom User Agent Strings format and separator
- [x] Limit the number of User Agent Strings
- [x] User Agent Strings wraps to increase readability
- [x] Save the User Agent Strings to a file
- [x] List the supported browsers to select

## Installation

```bash
npm install -g user-agent-string
```

## Usage

**ua-string** is short for *User Agent Strings*

```bash
$ ua-string -h

  Usage: ua-string [options] <browser>


  Commands:

    search|find [options] <keyword>  search and select the browser to get list of User Agent Strings
    list|ls [options] [keyword]      list and select the browser to get list of User Agent Strings

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

The rule is to use `*` to replace `%s`, 
you can also use `%s`, e.g. `-f '<%s>'`, `-f '{(%s)}'`, very **simple**, 
default format is `"*"`, same as `-f '"*"'`, e.g.

```bash
$ ua-string Chrome -l 1 # default
# >>> "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"

$ ua-string Chrome -l 1 -f '<*>'
# >>> <Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36>

$ ua-string Chrome -l 1 -f '{(*)}'
# >>> {(Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36)}
```

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

Save the User Agent Strings to a file, e.g.

```bash
$ ua-string Chrome -l 5 --save user_agent
.
├── user_agent
```

Automatically create the directory.
```bash
$ ua-string Chrome -l 5 --save ./ua/user_agent
.
├── ua
│   ├── user_agent
```

With `--line` can increase content readability.
```bash
$ ua-string Chrome -l 5 --line --save ~/user_agent
```

### search | find `[options]` `<search>`

Search and select browser to get list of User Agent Strings. e.g.

```bash
$ ua-string search ch -l 1 --line

$ ua-string search chrome -l 5 --save user_agent
```

### list | ls `[options]` `[keyword]`

List and select browser to get list of User Agent Strings. e.g.

```bash
$ ua-string list -l 5

$ ua-string list -l 5 --line
```

Similar to `search|find`, e.g.

```bash
$ ua-string list ch -l 1 --line

$ ua-string list chrome -l 5 --save user_agent
```

## License

The [MIT License](https://github.com/WindomZ/user-agent-string/blob/master/LICENSE)
