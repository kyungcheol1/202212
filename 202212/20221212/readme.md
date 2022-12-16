http protocol 

html을 어떻게 넘겨줘야 하는가 ?

html을 만들어주는것
templeate 엔진
<h1>코드작성 님 환영합니다</h1>
코드 작성 안에 일정한 규칙만 만들어서 넘겨주면 가변적인 값을 받아서 html을 만들 수 있다.

html불러오기

파일 시스템 

node js 
-node js
    -내장객체
        - global
            - process
            - Buffer
            - __dirname
            - __filename
            - require
    -내장모듈
        - path
        - net
        - fs (fileSystem)

    -외장모듈
        - express
    - Javascript
        - callback



파일 시스템 = fs

```js

const fs = require("fs")
fs.[]

```
Content-Type: application/json      //BODY 내용이 객체일때
Content-Type: application/x-www-from-urlencoded    //BODY 내용이 쿼리일때// 기본값

reduce 는 기본적으로 배열 메서드이다, 배열에서만 사용이 가능하다.
return 값이 어떠한 데이터 값이라도 될 수 있다.
array에서 다른 타입으로 바꾸고 싶을 때 사용하는 메서드
array > number , array > string , array > object 
주로 array > object 만들 때 많이 사용한다.

1. array > object
2. number > string
3. array > array  >> map 함수를 여러번 돌리지 않아도 된다.

url uri 차이
uri 는 파일이 아닌 것들
url 은 파일같은거 점 찍혀 있으면 url

동적 웹페이지, 정적 웹페이지  페이지가 항상 같으면 정적 페이지
