network 

sh (사용자)
사람이 컴퓨터와 대화하기 위해 필요한 언어

kernel
sh이 명령어를 내려주면 실행하는 아이
하드웨어를 조작하는 역할

sw > 드라이브 종류 
hw > 직접적인 컴퓨터 부품
session  > file
process는 소켓을 통해서 tcp에 넘겨 줄 수 있다.
컴퓨터 내부에서 통신 경로를 만들어 놓는것이다.

socket 이 tcp에 넘겨주는 형태 

host > lan 카드가 연결된 data link
port 

host (pc+인터넷이 되는 기계)
컴퓨터와 인터넷이 연결된것이다.

end-point 
a 컴퓨터에서 요청한 걸 c에서 받는 경우
a > 요청 o 에서 받고 c 로 보냄 
c > 요청 o 에서 받고 a 로 보냄 a에서 화면이 뜸
clien server 
시작과 끝이다.
end point 가 반응했다 ? > 서버가 반응 했다 ? 

switch
a b c 컴퓨터를 연결하려면 서로 다 랜선으로 물리적으로 연결해야한다.
하지만 모든 컴퓨터를 연결 할 수 없으니 연결을 도와주는 중간 단계 컴퓨터가 있다. 그런 장치를 switch 라고 한다
일반 가정집에서 공유기같은 개념이다.

switch 끼리 연결 해두고 Routing table : 이정표
router :교차로
packet : 데이터
ip > 인터넷

tcp

packet이 데이터 쪼가리들로 올 때 뭉쳐주는 역할
tcp 
L4 
tcp 프로토콜 
udp 
차이 = tcp에서는 연결이라는 개념이 있음 but 네트워크에서 연결은 물리적인 연결을 뜻함.
tcp에서 연결 > 데이터적인 연결 데이터를 연결해서 서로 인증된 것을 확인하는 것 
연결은 순차적으로 진행된다. > 1 2 3 이 있다면 이걸 순서대로 전해줘야한다. 
2번에서 로스가 나면 로스 난 이유를 파악하고 1 2 3 다시 보낸다.
상태라는 개념이 있다. 로그인 로그아웃
sever을 먼저 개통시켜 놓는다.
2^16 
1000개까진 중요한 것 쓴다
client가 대부분 연결, 연결 끊는 큼지막 한 동작을 한다.3 way handhake 검색해서 개념 알아보기.
죽겠다.
tcp server, client 구축해보기
내장모듈 net을 사용해야 한다. 
브라우저 > 넷 서버 요청 > 브라우저 나옴

npm init #package.json 안해도 되지만 습관적으로 하는게 좋다  

const port = process.env.SERVER_PORT || 3000 
값이 있다면 쓰고 없다면 3000번을 쓴다

createServer 
소켓을 열어야하기 때문에 create를 써야한다.
const server = net.createServer((client)=> {

})
client가 보내는 데이터를 가져온다.
서버를 이렇게 만든다는 선언
ip

const server = net.createServer((client)=> {
    client.on("data", (data)=>{
        console.log(data)
    })
})

client가 보내는 데이터를 그대로 콘솔로그로 찍는것

HTTP

Reqeust Message 구조
Response Message 구조 공부

경일 아카데미 Header부분 나오게 해보기

client  > serever  listen 을 통해서 개통을 함 서버를 대기를 시켜놓는다.
port > soket과 연관이 있으며 초 65353개정도의 포트를 가지고 있다.
0, 65535 빼고, 1000번까지는 잘 안쓴다.
데이터를 주고 받으면 연결이라고 인식 acq 를 받고 acq에 101을 주고
server는 acq를 다시 받았을 때 연결을 확인한다. 
>> 3way hand 
server와 연결하고 끊는 것을 보통 client 쪽에서 시도한다. 연결은 client쪽에서 먼저 연결되고
끊는건 server에서 먼저 끊긴다.


모든 함수가 이벤트라서 이벤트가 발동 해야만 함수가 실행된다.

http://127.0.0.1/index.css

/index.css

GET /kicss.css HTTP/1.1
GET / 없을경우 발동하지 않는다.
요청을 해서 받아올 수 있는 주소가 있어야 받아 올 수 있다.


