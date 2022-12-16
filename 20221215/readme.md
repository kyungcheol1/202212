javascript

함수 선언과 호출
콜스택
스코프 (지역변수, 전역변수)
호이스팅 (실행컨텍스트)
function
this
클로저
..함수형 .. map foreach filter

스코프

var let : 호이스팅

블록 스코프
함수 스코프
렉시컬 스코프

{
var a = 10
}
console.log(a) 10

{
let b = 10
}
console.log(b) //undefined

블록스코프 = 모든 중괄호 {}
함수스코프 = 함수선언 {}

var 는 함수스코프
let const 블록스코프 = 어떠한 괄호라도 전역, 지역 변수를 나눈다.

```js
function main() {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
}

main();
```

var = 선언을 function 안에 해놓은것과 비슷하게 된다.

렉시컬 스코프

```js
const x = "x";
function c() {
    const y = "y";
    console.log("c", y);
}

function a() {
    const x = "xx";
    console.log("a", x);
    function b() {
        const z = "z";
        console.log("b", z);
        c();
    }
    b();
}

a();
b();
```

호이스팅

```js
var x = "ingoo";

function inner() {
    var x = "hello";
    console.log(y); //undefiend
    var y = "hello";
}

inner();
```

코드 실행 결과를 아는가 ?

실행 컨텍스트를 아는가 ?
//실행 컨텍스트 >>> heep 이라고 보면 된다.

렉시컬 스코프를 아는가 ??

우리가 배웠던 call stack 에 대해서

heep 공간 , callsack 공간
javascript가 실행될 때

anonymous(익명함수) 함수가 실행
--> 실행이 되면서 코드를 한 줄 한 줄 읽고 선언 부분만 실행  
--> heep 에다가 저장을 시킴 heep >> 실행 컨텍스트

익명 함수 실행

var x
x = "ingoo" //

inner 함수 선언

inner
var x = 'hello'
console.log(x)

inner 함수 호출

inner()

콜스택

inner()
anooymous()

{
var x = "hello"
console.log(x)
}

실행 컨텍스트

0001 x ingoo
0002 inner {}
0003 x hello

> > 문제발생 이렇게 저장하지 않는다

0002 inner {
0001 x hello
}
0001 x ingoo

<!-- 0003 {x: 0004}
0004 hello -->

```js
inner();
function inner() {
    var x = "hello";
    console.log(x); //undefiend
    var y = "hello";
}
```

이 경우 inner 함수를 먼저 스택에 쌓는다.
그런 다음 inner()을 실행 해버린다.
anonymous부터 선언을 올려버린다.

----문제 ---

```js
function inner() {
    console.log(x);
}
var x = "ingoo";
inner();
```

inner가 먼저 올라가 있고 선언까지 올라감
var x = 선언이 되어있기 때문에 console.log 가 잘 찍힘

```js
inner();
function inner() {
    console.log(x);
    let x = "hello";
}

var x = "ingoo";
```

funtion inner부터 담고 var선언을 담고
var 값이 뜰 줄 알았지만
let도 선언을 해놓긴 한다. > 선언을 하긴 하지만 default 값도 넣지 않는다.
TDZ = let x에 의해서 console.log(x)는 값을 받지 못하는 아이가 되었다.

```js
inner();
function inner() {
    x = "hello";
    console.log(x);
}

console.log(x);
var x = "ingoo";
```

inner을 담고 var x를 담고
inner을 실행하면 바로 hello가 뜨고 그 다음에 console.log
inner를 통해 x = "hello" 가 되어있기 때문에 hello 찍힘
inner를 실행해서 x 값이 부여가 되어 있음

function inner() {
x = "hello";
console.log(x);
}

x 앞에 선언이 생략되어 있다. var가 생략이 되어 있는데
function 위에 var가 생성된다. 그래서 아래에 있는 console.log 도 찍히게 된다.

변수는 맨 위에 생성하는게 제일 좋다.

```js
inner();
function inner() {
    x = "hello";
    console.log(x);
}

var x = "ingoo";
console.log(x);
```

inner 담고 var 담고
var x 선언부분만 올라가고
inner 실행 콘솔 찍고 // hello
x = ingoo 담고 콘솔찍고
hello ingoo

## Function

THIS가 어려운 이유

하는 역할이 너무 많다

```js

1. 일반 함수로 사용하는 경우 ()=>{}
function Foo(a,b){
   console.log(this)
   return [a,b]
   }

   const a = Foo(1,2)
   console.log(a)

2. 생성자 함수

function Foo(a,b){
    console.log(this)
    this.arr = [a,b]
}

const a = new Foo(1,2)
console.log(a)

function Foo2 = (a,b){
    console.log(this)
}

console.log(Foo)

// new 키워드를 쓰게 되면 this가 바뀐다.
// 애로우 함서를 쓰게되면 this가 바뀐다. 더 가벼워진다 생성자 함수가 없기 ㅂ=때누


3. 객체 메서드

function Foo(a,b) {
    console.log(this)
    return [a,b]
}
const bar = {
    method:Foo
}
bar.method(5,6) [5,6]
```

function으로 선언한 함수가 상황에 따라 this가 바뀐다.
function키워드는 this binding 이라는 것이 작동된다.

this binding

function 이라는 키워드를 함수로 선언하면
this라는 것을 바꿀 수 있다.

bind
call
apply

```js
function Foo(a, b) {
    console.log(this);
    return [a, b];
}

const fooBind = Foo.blind({ name: "ingoo" });
```

ES6

일반함수 -> Arrowfunction
생성자함수 -> class
객체 메서드 -> 메서드 축약형

### 객체 메서드

ES5

```js
// function Foo(a,b) {
//     console.log(this)
//     return [a,b]
// }
let bar = {
    method: function (a, b) {
        console.log(this);
        return [a, b];
    },
};
bar.method(5, 6)[(5, 6)];
```

es6

```js
const bar = {
    name:'web7722'
    method(a,b){
        console.log(this) // 생성자 없음 binding 은 됨
        return [a,b]
    }
}
```

생성자함수

ES5

```js
function Foo(a, b) {
    console.log(this); // 생성자 있음 binding은 됨
    this.arr = [a, b];
}

Foo.prototype.getArr = function () {
    return this.arr;
};

const foo = new Foo(1, 2); // {arr:[1,2],getArr:()=>{return this.arr}}

function 참새() {
    this.크기 = "작다";
}

function 비둘기() {
    this.날개 = 2;
}

참새.prototype = new 비둘기();
```

prototype = 실체 객체
참새는 비둘기와 흡사라하 라는것을 표현하기 위해서 이렇게 표현한다

12:30~

ES6

class Foo{
constructor(a,b){
this.arr = [a,b]
}

    getArr(){
        return this.arr
    }

}

const a = new Foo()

property descriptor 속성

enumerable: ture, false

iterable, iterator

this는 실행될 때 결정된다.function 키워드는 안쓰는게 좋다
es6 문법을 사용해야 this를 좀 더 직관적으로 알 수 있다.
