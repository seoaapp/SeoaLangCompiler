/**
 * @name SeoaLangCompiler
 * @description Compiler for Seoa-Lang
 * @author Seoa Lang Development Team
 * @license Apache-2.0
 * @see https://github.com/seoaapp/SeoaLangCompiler#readme
 */

'use strict'

const fs = require('fs')

const version = require('./package.json').version

// Flag check
if (process.argv.includes('-v') || process.argv.includes('--version')) {
  console.log(`Seoa Language v${version}`)
  process.exit(0)
}

const targetFile = process.argv[2]

if (!targetFile || process.argv.includes('-h') || process.argv.includes('--help')) {
  // Command Help Message Here
  console.log(`Seoa Language Compiler v${version}

Usage: seoac [Options] filename

Options:
-h, --help      Print This Message
-v, --version   Show Version of Seoa Language`) // 저거 컴파일러라서 filename 필요한데요;;;
  process.exit(0)
}

compile()

/**
 * Main Compile function
 */
function compile() {
  /**
   * stores user code files.
   * @type {string[]}
   */

  /*
  컴파일 과정
  1. 입력된 값이 폴더인지 파일인지 확인하여
  파일일 경우 그 파일만 컴파일, 폴더인 경우 그 폴더를 root로 두고 안의 모든 파일을 컴파일
  2. 필요한 파일 리스트를 배열에 저장
  3. 파일을 스캔하면서 main 함수 찾기 (만약 없을 경우 Error)
  4. parser에 파일 하나하나씩 전송
  5. 지금 많은 혼란이 오고 있으니 나중에 작성 -_- 그럼 전 자러갑니다
  */
  var user_files = [];

  if (!fs.existsSync(targetFile)) {
    console.error('seoac: Fatal: File not exist!')
    process.exit(1)
  } else {
    if (targetFile.endsWith('.seoa')) {
      user_files.push(targetFile)
    } else if (fs.lstatSync().isDirectory()) { // 폴더인가? 
      findFile(targetFile)
    } else {

    }

    console.log(require('./compiler/parser')(targetFile) === 0 ? 'Compiled' : 'Failed')
  }
}

/**
 * find all files to compile when file input is `.`
 * @argument {string} directory
 * @returns {string[]} file list
 * @todo later
 */
function findFile(dir) {
  let files = fs.readdirSync(dir);
}

/**
 * Register modules before compiling user code
 */
function registerModules() {

}