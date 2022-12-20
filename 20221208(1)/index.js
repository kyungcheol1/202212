/* 1에서 100까지 출력
3의 배수일때 Fizz
5의 배수일때 Buzz
3의 배수, 5의 배수 FizzBuzz

3 3,5 true false = fizz
5 3,5 false true = buzz
15 3,5 true true = fizzbuzz
*/

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


for(let i= 1; i < 101; i++){
    // const a = clc(i,5,"buzz")
    // const b = clc(i,3,"fizz")
    const arr = []       
    for(let k=0; k<qst.length; k++){
    //console.log(qst[i])
        const rst = clc(i, qst[k][0], qst[k][1])
        arr.push(rst)
    }
//    const arr = [a,b]

    let tmp = []
    for (let j=0; j<arr.length; j++){
       if(arr[j] !== false){
            tmp.push(arr[j])
       }
    }
    if(tmp.length === 0){
        console.log(i)
    } else {
        console.log(tmp.join('')) // ['a''b'] = [ab]
    }
    // if (a === false && b === false) {
    //     console.log(i)
    // } else {
    //     console.log(a,b)
    // }
}

//     if(i%3 === 0 & i%5 === 0){
//         console.log("FizzBuzz")
//     } else if(i%3 === 0){
//         console.log("Fizz")
//     } else if (i%5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)}
// 이게 아니면 ,,