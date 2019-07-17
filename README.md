# Seoa Language Compiler

## EN

## KR

> 이 메세지는 구체적인 계획이 수립되면 삭제됩니다.

그럼 잠시 생각해 봅시다

컴파일 시스템을 어떻게 할까요?

seoac.js - 메인 컴파일러 시작, 옵션 구분 및 컴파일할 파일 파악 -> 파일당 하나씩 parser.js로 전송 | 반환된 파일을 어떻게 어떻게 c언어 파일로 write -> end

parser.js - 파일을 받고 나서 사전 작업 시작(파일에 주석도 있고 더러우니까) - 하나씩 전용 명령어(토큰)으로 변환 (scanner.js에 전송) 후 컴파일 (c언어로 변환) 후 반환

token.js - 토큰 정의된 enum

scanner.js - parser.js에서 받은 파일을 토큰들의 집합으로 변환 후 반환

[CHANGLOG](./CHANGLOG.md)