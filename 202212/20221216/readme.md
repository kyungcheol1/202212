머리가 아프다 피곤곤피

# javascript

callback, promise async/await

사전지식이 없으면 힘들지만 사전지식이 있으면 할만하다.

클로저

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

클로저를 알려면 실행커텍스트, 스코프, 이벤트루프 를 알아야 쉽게 할 수 있다.

해결법이 var -> let으로 바꾸면 된다.
즉시함수를 써서 해결하는 방법도 있다.

즉시함수

```js
function sum() {}
sum();

(() => {
    console.log("asdfg");
})();
```

앞 ()는 함수를 선언하는것 , 뒤에 ()는 바로 실행하는것

주의사항 > 앞에다가 세미클론을 붙여야한다. = 즉시함수 시작전에 세미클론을 붙여야 에러가 안난다. prettier를 쓰면 굳이 안써도되지만 알아두는게 좋겠다.

```js
function main() {
    for (var i = 0; i < 5; i++) {
        ((j) => {
            setTimeout(() => {
                console.log(j);
            }, 1000 * j);
        })(i);
    }
}

main();

function a() {
    let txt = "hello wrold!";

    return () => {
        console.log(txt);
    };
}

const point = a();
console.log(point);
```

point()
를 불러왔을 때 txt가 찍히게 된다.
함수 a 안에 txt 가 선언되어 있기에
리턴 콘솔이 a 안에 선언되어있는 txt 변수를 불러온다.
이게 클로저다 .........?.................???????

```js
const clickHandler = (i) => {
    const num = i + 1;

    return (e) => {
        console.log(num);
    };
};

addEventLisner("click", clickHandler());

let counter = 0;

//버튼을 누르면 + counter += 1
//버튼을 누르면 - counter -= 1 이걸 100개를 만드는 방법

const inner = () => {
    let count = 0;
    const outer = () => {
        count++;
        return count;
    };
    return outer;
};

const counter = inner();
counter();
counter();
counter();
const a = counter();
console.log(a); // result ?4
```

```js
const Counter = (type) => {
    let count = 0;
    const increment = () => ++count;
    const decrement = () => --count;
    return type === "increment" ? increment : decrement;
};

const increment = Counter("increment");
const decrement = Counter("decrement");

increment();
increment();
increment();
decrement();
decrement();
const result = increment();
console.log(result);
```

답 4?

```js
const Counter = (type) => {
    let count = 0;
    const increment = () => ++count;
    const decrement = () => --count;
    return [increment, decrement];
};

const [increment, decrement] = Counter();

increment();
increment();
increment();
decrement();
decrement();
const result = increment();
console.log(result);

function find(obj) {
    const { a, b, c, d, e, f, g } = obj;
}
```

```js
const a = 10;
const add10 = (_) => _ + 10;
add10(a); //20

const add20 = ($) => $ + 10;

const f1 = () => {
    let count = 0;
    return [() => ++count, () => --count];
};

const f1 = (count) => [() => ++count, () => --count];

const make = (count) => () => ++count;
```
