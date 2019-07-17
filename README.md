# Seoa Language Compiler

## EN

## KR

> 이 메세지는 구체적인 계획이 수립되면 삭제됩니다.

그럼 잠시 생각해 봅시다

컴파일 시스템을 어떻게 할까요?

seoac.js - 메인 컴파일러 시작, 옵션 구분 및 컴파일할 파일 파악 -> 파일당 하나씩 parser.js로 전송 | 반환된 파일을 어떻게 어떻게 c언어 파일로 write -> end

parser.js - 파일을 받고 나서 사전 작업 시작(파일에 주석도 있고 더러우니까) - 하나씩 전용 명령어(토큰)으로 변환 후 반환

token.js - 토큰 정의된 enum

compiler/cgen.js - c언어 코드 생성 (컴파일러 전용)

seoa (그냥 실행): seoa.js(파일 읽기) -> parser.js(토큰 변환) -> seoa.js(실행)

seoac (컴파일): seoa.js(파일 읽기) -> parser.js(토큰 변환) -> seoa.js(다시 받아서) -> compiler/`language-to-compile`gen.js (코드 변환) (예: `cgen.js` - c언어로 변환)


[CHANGLOG](./CHANGLOG.md)