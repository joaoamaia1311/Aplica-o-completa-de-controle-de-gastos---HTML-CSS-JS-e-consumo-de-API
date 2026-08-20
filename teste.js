function squaresWithThree(n) {

    let contagem = 0;
    let quadrado = 0;

    for (let i = 0; i < n; i++){
        let quadrado = i * i;
        if (String(quadrado).includes("3")) {
            contagem++;
        }
    }

    return contagem;

}