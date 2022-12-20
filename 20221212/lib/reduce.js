const arr = ['Host:localhost', 'Connection:keep-alive', 'Content-Type:application/json']
arr.forEach(v=>console.log(v))

/*
인자값
1. arr 배열에 있는 요소
2. arr 배열에 있는 인덱스 > 내 현재 인덱스에서 이전값이나 다음값 구할 때 필요
3: arr 배열자체. 
*/

let initialValue = {}
arr.reduce((acumulator, currentValue, index, array)=>{
    const [key, val] = currentValue.split(":") // Host:localhost -> [Host,localhost]
    acumulator[key] = vla
    // acumulator.name = currentValue
    return acumulator
}, initialValue)