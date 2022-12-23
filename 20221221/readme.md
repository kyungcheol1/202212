# javascript

    pormise
    async/await

를 배워야 DB 배울만해진다.

이번 1주짜리는 연습, 협업을 할 때 필요한 기본 스타일, 기본 세팅, 효율적인 세팅
다음 프로젝트 할 때 본 프로젝트

```js
net.createSerer((socket) => {
    socket.on("data", (chunck) => {
        const req = requst(chunck);
    });
});
```

콜백을 쓴다 > 비동기 코드를 처리하기 위해서
이벤트 기법을 활용해서 처리해씩 때문에 가능
data를 받았을 때 콜백이 실행되는 형식

callback
promise
async/await

아반떼 요청 후 응답
아반떼 요청 후 응답
제네시스
소나타
아반떼
소나타

비동기 통신 > 클라이언트 기준

클라이언트에서 보낸걸 서버에선 언제 오는지 모른다.
3개의 요청, 3개의 응답 이 필요하다
아반떼 요청 > 결과물 도착하면 소나타 요청 > 소나타 응답 오면 제네시스 요청

비동기 코드를 어느정도 없애기 위해서
new 로 만들어지면 객체형태
무조건 인자로 하나를 받는다.
비동기 코드를 사용 할 때 깔끔하게 사용하기 위해서 사용한다.
console.log(new Promise(() => {}));
resolve reject >> resolve = 성공을 하면 이곳에 값을 넣는다. reject = 실패 하면 값 넣는곳
네트워크 요청을 했을 때 성공의 응답인지 실패의 응답인지 나눠서 값을 넣어주는것

const pr = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("OK");
}, 3000);
});

0 ~ 2.99초까지 pending 상태라서 값을 뽑아오지 못한다.
3초가 되면 resolve 값이 채워지면서 fulfilled 상태가 된다.

promise 객체는 then, catch, finally 등의 메소드가 있음
기본적으로 state(상태)를 가지고 있음
-pending
-fulfilled 데이터가 차 있는 상태
-rejected

console.log(pr) > Promise{<pending>} 이 뜬다 이걸
Promise{state:<pending>, result:undefined}값으로 이해
result 값은 내가 resolve로 넣은 값

pr.then() 저장된 데이터를 불러오는 것
then안에 함수 들어간다. 인자값은 아무거나

callback 의 문제 > tab index가 많다
promise의 > 객체 만들기 어렵고 사용할 때 코드량이 많다.
async/await

async > promise를 반환해주는 함수가 된다.

11시 ~11 27

My sql >> 하드디스크를 조작하는것
하나의 서버다 tcp 통신을 하는 것이고, port를 가지고 있다.
npm install mysql 드라이브를 까는것이다
my sql 는 내 컴퓨터에 프로세스를 돌리는것

my sql 드라이브 설치

# linux

$ sudo apt updata
$ sudo apt upgrade
$ sudo apt install mysql-server
$ mysql --version
$ sudo service mysql start
$ ps -ef | grep mysql

# mac

$ brew install mysql
$ mysql --version
$ vrew services start mysql
$ ps -ef | grep mysql
$ sudo mysql_secure_installation

sudo service mysql start

mysql -uroot -p[패스워드]

mysql는 ;를 꼭 붙여야한다.

서버 한 페이지를 만드는 실행순서
server > router > controllers > services > repository

server > 로직을 처리하는 부분
router > 요청 응답만 하는 친구

