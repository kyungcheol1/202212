const form = document.querySelector("form");
const user = document.querySelector("input[type=text]");
const pass = document.querySelector("input[type=password]");

const xhr = new XMLHttpRequest();
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// xhr.open("method", "url"); // open 이라는게 client open 과 같다.

form.addEventListener("submit", (e) => {
    e.preventDefault();
    xhr.open("post", "http://localhost:3000/user/login"); // 요청을 이렇게 하겠다 라는 정의 ?
    xhr.send(`user_id=${user.value}&user_pw=${pass.value}`); // 실제 요청이 날아가는것
    xhr.addEventListener("readystatechange", (e) => {
        const { target } = e;
        console.log("hello!", xhr.readyState); //hello 3번 찍힘
        // socket 열었다 2
        // 응답대기중 3
        // 완료 4
        if (xhr.readyState === 4) console.log(target);
    });
});

alert("hi");

