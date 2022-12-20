# tcp

L4 - 식별자 - port
l3 - 식별자 - ip

프로그램, 프로세스의 차이

프로그램 - 코드
프로세스 - 코드를 실행시킨 것

프로세스, 스레드의 큰 차이
데이터 공유 안됨, 됨 

프로세스끼리 데이터를 공유하려면 통신밖에 없다.

OSI 7계층 : 
컴퓨터의 네트워크를 계층별로 설명한것

우리가 사용할것 > 인터넷, TCO

우리가 소스코드를 만드는것 > 5 ~7계층 (어플리케이션)

tcp와 어플리케이션의 통신을 위해서는 socket 이라는 것이 필요

TCP < 커널 os (우리가 쉽게 만들 수 없다. os 깊숙한곳에 박혀있다)

nodejs tcp 통신 할 수 있는 내장모듈 > "net"

tcp 특징

연결이 있다. 논리적인 연결 
(connection, Session)
tco는 순서가 있다. 순차적으로 왔다갔다한다.

프로토콜 > 통신을 할 때 정해진 규격

# L5 ~L7 프로토콜
-string 조작
-확장성 고려
갑자기 내용이 바뀌거나 추가가 되었을 경우 문제 없이 돌아갈 수 있게 설계를 하는가 ?
-javascript 문법의 문제.. 자유자재로 변수타입을 유추할수있고, 원하는 대로 데이터를 만드는것.

"content:내용,reply:true,connection:true" = 
[content:내용, reply:true, connection:true] =
[[content,내용], [reply,true], [connection,ture]]
[{content:내용}, {reply,true}, {connection,ture}]

{content:내용, reply:true, connection:true} =

## reqeust message

reply : true
content-type:string
content-length:10

hello world!!!

## response message

reply:true
content-type:string
content-length: 10
connection:alive | close

hello world2222

