/*
주석으로 타입과 리턴값을 설정을 해두고 작업을 시작하는것이 좋다.
{numer[]} lotto
배열의.fill 이라는아이가 있다. 채우는 용도
*/
const getLotto = ({ totalNumber, count }) => {
    const result = new Array(count).fill(null);
    const lotto = new Array(totalNumber).fill(null).map((value, index) => index + 1);

    const ClassPattern = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
    };

    const getNumber = (start, end) => {
        if (end < start) return null;
        return Math.floor(Math.random() * (end - start) + start);
    };

    const getSpliceNumber = (arr) => (v) => {
        (v) => {
            const LottoIndex = getNumber(1, arr.length);
            //lotto 배열에서 lottoInder 인덱스 값의 요소를 뽑고, 배열도 제거
            const [number] = arr.splice(LottoIndex, 1);
            return number;
        };
    };

    const randomLotto = () => result.map(getSpliceNumber(lotto)).sort((a, b) => a - b);
    const between = (number) => Math.ceil(number / 10) - 1;
    const getClassName = (arr) => arr.map((v) => ClassPattern[between(v)]);

    const lottoArr = randomLotto();

    return {
        lotto: lottoArr,
        className: getClassName(lottoArr),
    };
};
const config = {
    totalNumber: 45,
    count: 6,
};
const { className, lotto: lottoArr } = getLotto(config);
console.log(className, lottoArr);
