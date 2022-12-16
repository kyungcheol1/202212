function main() {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
        console.log(i);
    }
}

main();
