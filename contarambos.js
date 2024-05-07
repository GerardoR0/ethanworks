function contar() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            console.log("caera la replublica");
        } else {
            console.log(i);
        }
    }
}
contar();