// const 아반떼 = (callback) => {
//     setTimeout((a) => {
//         console.log("아반떼 go");
//         callback();
//     }, 3000);
// };

// const 소나타 = (callback) => {
//     setTimeout(() => {
//         console.log("소나타 go");
//         callback();
//     }, 2000);
// };

// const 제네시스 = (callback) => {
//     setTimeout(() => {
//         console.log("제네시스 go");
//         callback();
//     }, 1000);
// };

// 아반떼(() => {
//     아반떼(() => {
//         제네시스(() => {
//             소나타(() => {
//                 아반떼(() => {
//                     소나타(() => {
//                         console.log("hell");
//                     });
//                 });
//             });
//         });
//     });
// });

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("OK");
//     }, 3000);
// });

// pr.then((data) => {
//     console.log(data);
// });

// const 아반떼 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("아반떼 race");
//         }, 3000);
//     });
// };

// 아반떼()
//     .then((a) => {
//         console.log(a);
//         return 아반떼();
//     })
//     .then((a) => {
//         console.log(a);
//         return 제네시스();
//     })
//     .then((data) => {
//         console.log(data);
//         return 소나타();
//     })
//     .then((data) => {
//         console.log(data);
//         return 아반떼();
//     })
//     .then((b) => {
//         console.log(b);
//         return 소나타();
//     })
//     .then((c) => {
//         console.log(c);
//     });

// const 소나타 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("소나타 go");
//         }, 2000);
//     });
// };

// const 제네시스 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("제네시스 go");
//         }, 1000);
//     });
// };

// const 아반떼 = async () => {
//     return "아반떼 go";
// };

// console.log(아반떼());

// const init = async () => {
//     const result = await 아반떼();
//     console.log(result);
//     const result2 = await 소나타();
//     console.log(result2);
//     const result3 = await 제네시스();
//     console.log(result3);
// };

// const init = async () => {
//     const result = await 아반떼();
//     console.log(result);
//     const result2 = await test();
//     console.log(result2);
//     const result3 = await 제네시스();
//     console.log(result3);
//     const result4 = await 소나타();
//     console.log(result4);
//     const result5 = await 아반떼();
//     console.log(result5);
//     const result6 = await 소나타();
//     console.log(result6);
// };
// const init = async () => {
//     const result = await Promise.all([아반떼(), 소나타(), 제네시스()]);
// };

// const 투산 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("투싼 go");
//         }, 4000);
//     });
// };

// const test = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("test");
//             resolve("asasqwe");
//         }, 1000);
//     });
// };

// 투산().then((data) => {
//     console.log(data);
// });
// test().then((data) => {
//     console.log(data);
// });

// test();

// const 아반떼 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("제네시스 go");
//         }, 1000);
//     });
// };

// const 소나타 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("소나타 go");
//         }, 2000);
//     });
// };

// const 제네시스 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("제네시스 go");
//         }, 1000);
//     });
// };

// init();

// let rst = "없나";
// const init2 = async () => {
//     const result2 = await 아반떼();
//     rst = result2;
// };

// init2();
// console.log(rst);

// const text = async () => {
//     const init = await init;
// };

const test = async () => {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("test");
        }, 2000);
    });
    let result = await promise1;
    return result;
};

test();

