var _ = require('lodash')

var quote = function(input) {
	var lines = input.split('\n')
	lines = _.map(lines, (line) => {
		return '"' + line.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
	})
	
	return lines.join("\\n\" + \n") + '"'
}

module.exports = quote