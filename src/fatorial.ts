
function calcularFatorial(a:number){
    let result = 1;
    let i = a;
    
    while (i > 1) {
      result = result * i;
      i--;
    }
    
    return result;
  }

export{calcularFatorial}