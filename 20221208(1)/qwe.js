const clc = (num,mul,print) => {
    // return num%mul === print
    if (num%mul === 0) {
        return print
    } else {
        return false
    }
}

const qst = [
    [3, "fizz"],
    [5, "buzz"],
    [7, "hello"],
]

//map 배열 안에 있는 것들을 바꿀 때 

for(let i=0; i<=100; i++){
    const arr = qst.map((value)=> clc(i, value[0], value[1])).filter((v) => v).join("") || i
    console.log(arr)
}