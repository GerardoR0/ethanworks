function contar() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log("Fuzz");
        } else {
            console.log(i);
        }
    }
}
contar();