
/*----------------------contador de digitos----------------------------------------------*/
function cont(){
    var numero = parseInt(document.contador.numero.value);
    
    if(numero <10){
      document.contador.resultadonatural.value=("el numero es de un digito");
    }
    if(numero >=10 & numero<99){
      document.contador.resultadonatural.value=('el numero es de dos digitos');
    }
    if(numero >=100 & numero<999){
      document.contador.resultadonatural.value=('el numero es de tres digitos');
    }
    if(numero >=1000 & numero<9999){
      document.contador.resultadonatural.value=('el numero es de cuatro digitos');
    }
    if(numero >=10000 & numero<99999){
      document.contador.resultadonatural.value=('el numero es de cinco digitos');
    }
    if(numero >=100000 & numero<999999){
      document.contador.resultadonatural.value=('el numero es de 6 digitos');
    }
    
  
  }