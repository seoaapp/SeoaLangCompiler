const fs = require('fs')

module.exports = (targetFile) => {
  console.log('File Check: ' + targetFile)
  fs.readFile(targetFile, (err, data) => {
    if (err) {
      console.error(err); return 1
    } else {
      return new SyntaxError('SyntaxError')
    }
  })

  return 0
}