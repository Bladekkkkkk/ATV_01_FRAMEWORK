function encontrarMenorNumero(a) {
    let menor = a[0]; 

    for (let i = 1; i < a.length; i++) {
        if (menor > a[i]) {
            menor = a[i]; 
        }
    }
    
    return menor; 
}

export { encontrarMenorNumero };