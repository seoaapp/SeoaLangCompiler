/**
 * @name SeoaLang
 * @description Interpreter for Seoa-Lang
 * @author Seoa Lang Development Team
 * @license Apache-2.0
 * @see https://github.com/seoaapp/SeoaLangCompiler#readme
 */

'use strict'

const fs = require('fs')

const parser = require('./parser')

const version = require('./package.json').version

// Flag check
if (process.argv.includes('-v') || process.argv.includes('--version')) {
  console.log(`Seoa Language v${version}`)
  process.exit(0)
}

const targetFile = process.argv[2]

if (!targetFile || process.argv.includes('-h') || process.argv.includes('--help')) {
  // Command Help Message Here
  console.log(`Seoa Language v${version} - Interpreter

Usage: seoa [Options] filename

Options:
-h, --help      Print This Message
-v, --version   Show Version of Seoa Language`)
  process.exit(0)
}

// TODO: 여러 개의 파일 import문으로 동시에 처리 ('import' support)
if(!fs.existsSync(targetFile)) {
  console.error('seoa: Fatal: File not exist!')
  process.exit(1)
}
if(!targetFile.endsWith('.seoa')) {
  console.error('seoa: Fatal: Not a SeoaLang file!')
  process.exit(1);
}

const code = fs.readFileSync(targetFile).toString()

const tokenList = parser.parse(code)