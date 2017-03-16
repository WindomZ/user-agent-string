# user-agent-string

Easy way to get User Agent Strings in Command line interface.

The current User Agent Strings source comes from [useragentstring.com](http://www.useragentstring.com/pages/useragentstring.php)

![v0.4.1](https://img.shields.io/badge/version-v0.4.1-orange.svg)
![status](https://img.shields.io/badge/status-beta-yellow.svg)

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
    -f, --format <format>        format of the strings
    -s, --separator <separator>  separators of the strings
    -l, --limit <limit>          limit count of the list
    --save <file>                save to file
    --line                       each string has a newline
```

## License

The [MIT License](https://github.com/WindomZ/user-agent-string/blob/master/LICENSE)
