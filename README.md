# J-Quote

Quotes text with double quotes, single quotes, and backslashes in a way which
can be accepted into Java code.

# Programmatic Usage

Accepts a string as an argument, returns a transformed string.

> var jQuote = require('j-quote')
> var quoted = jQuote(unquoted)

## Command Line Invocation

This can be invoked on the command line as well.

> j-quote /path/to/file

Reads /path/to/file and quotes the text in it, writing to stdout.

> j-quote -

Reads from stdin, quotes the text in it, writing to stdout.

> j-quote

Reads from stdin, quotes the text in it, writing to stdout. Useful for allowing
keyboard input and getting the transformed input back.
