# 라우팅부터 완벽하게

# GET 완성

# POST 완성

# 반대로 구현 ..?

router -> controller -> service -> repository -> db

db 확인 repository 구현 및 테스트

service 구현 및 테스트

controller service 장착

SELECT \* FROM user WHERE user_id="web7722" and user_pw"1234";

const obj = { where: { user_id: "web7722", user_pw: "1234" } };
this.findOne(obj);

# AJAX

new promise -> fetch, axios

fetch, axios 의 근본 > ajax

ajax를 쉽게 쓰는게 fetch, axios

AJAX(Asynchronous Javascript And XML)

XML
자바의 객체처럼 데이터를 저장하는 형태 mark up으로 저장하는 형태
지금은 거의 쓰지 않음

```xml
<root>
    <user_id>web7722</user_id>
    <user_pw>web7722</user_pw>
<root>
```

```js
{
    user_id:'web7722',
    user_pw:"web7722"
}
```

같다

ajax 요청 할 때 사용한다. http://localhost:3000 을 브라우저에 요청 할 때

브라우저 주소창에 입력 > 요청 데이터가 GET 일 수 밖에 없음
POST로 보낼 순 없다

요청 `javascript` 문법으로 request message 를 요청

