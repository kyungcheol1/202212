//!!!!9시20분 ~9시40분 영상 봐야함
서버를 열고 대기를 시켜놔야함 >>> 프로토콜이 계속 돌고있는것

client도 하나의 프로세서 
브라우저는 tcp가 구현되어있는 프로세서, client 같은 역할
naver.com같은 도메인은 ip와 같다. 

프로토콜
통신을 할 수 있는 규격
이미 규격이 있지만 불러 올 수 있는 명령어 등을 알아야 제대로 쓸 수 있다.

네트워크
관계연결 

서버는 
클라이언트에게서 어떤 데이터를 받았을 경우 거기에 맞는 데이터를 다시 보낼 수 있는게 구현되어 있어야한다.
그런 규격을 정하는게 프로토콜 ///

브라우저가 원하는 data를 파악하고 그거에 맞는 data를 주면 된다.
원하는 data == 프로토콜  == http 프로토콜

http 프로토콜 이해

브라우저도 하나의 TCP 프로토콜이다.
http는 서버와 클라이언트가 데이터를 주고 받기 위한 프로토콜(규칙)

http는 연결 상태를 유지하지 않는 비 연결성 (stateless)
**연결을 한 번 하고 랜더가 되면 연결을 끊는다. 
    -연결 후에 TCP연결을 끊는다.
        -TCP논리적 연결만 끊는다.

HTTP 기본골격 요청이 있으면 무조건 응답을 준다. 데이터가 없으면 없다라고 응답을 준다.

HTTP 동작방식
브라우저에서 URI를 입력시 동작 형태
브라우저에서 uri를 입력하면 
3wayhandshake가 한 번 일어나고 
http 프로토콜이 일어남.
client(브라우저)
client > server : request 요청을 함 // 이 때 서버는 무조건 response를 준다. 데이터가 없으면 없다라고 쥐어짜서 준다.

request
GET / HTTP/1.1  //GET값 = uri querystring 으로 표현되는 것들
host:127.0.0.1:3000
user-agent:mozlla/4.0


등으로 이루어져 있음

server(webserver)

response
HTTP/1.1 200 Ok
date: .....
content-length:2000
content-type: html/text
connect:close // 연결을 끊겠다는것
빈 줄
<html>에뷍붸베레부렙엡엡
</html>

등으로 메세지를 준다. 

이러면
4way handshake 가 일어나면서 
연결이 끊긴다. 서버가 먼저 끊긴다. 논리적 연결많 끊김, 프로세스는 여전히 도는중


HTTP 요청 메시지 
GET /user?name=ingoo HTTP/1.1
Host: 127.0.0.1:3000
User-agent:...
Content-type:

name=hellow

요청 응답은 크게 2가지 형태로 읽어야 한다.
빈칸을 기준으로 
head부분 body부분으로 나눠서읽는다.
request header + request body

Start line
GET /user?name=hellow HTTP/1.1 //POST를 쓰면 그냥 POST로 입력이 되는것
[요청메서드] [요청 URI] [HTTP 프로토콜 버전]

요청 메서드(Request Method)
    GET : 데이터 요청의 의미로 사용합니다.
    POST : 데이터 입력의 의미로 사용.
    PUT : 데이터 수정의 의미
    DELETE : 데이터 삭제하기 위해서 사용
    OPTIONS : 웹 서버가 지원하는 메서드의 종류 요청

요청 URI(PATH)
    HOST를 제외한 나머지 URI를 적음.
    
HTTP 프로토콜 버전
    HTTP버전이 1.0 1.1 2.0이 있는데 우리는 1.1만 쓴다.

content-Type은 알아야한다.
header 부분은 책 한권 수준이다...

body
요청 데이터를 넣는 공간

### 응답 메세지 
HTTP/1.1 200 Ok
Data : ....
Content-Length: 6821
Content-Type: text/html

<html>
...내용
</html>

start line
http 프로토콜 버전
    요청메세지와 같음
상태코드
    1xx 
    2xx : 대부분 성공의 의미 get > 200 post > 300
    3xx :
    4xx : 페이지가 없음, 오류
    5xx : 서버터짐
ok 상태 메세지

content-Type 중요




AJAX 
비동기 통신, 자바스크립트로 요청을 보내는 것.
 $ajax <<...이렇게 넣으면 초보다

fetch
axios 












