
/*------------------mayor menor 4 numeros----------------------------*/ 

function mayor_four(){
    //se dan valores a variables desde el formulario principal
    var n1 = parseInt(document.formulario_mayor_menor.n1.value);
    var n2 = parseInt(document.formulario_mayor_menor.n2.value);
    var n3 = parseInt(document.formulario_mayor_menor.n3.value);
    var n4 = parseInt(document.formulario_mayor_menor.n4.value);
  
  
  /*condiciones para hayar
     mayor menor de 4 numeros
     se anidaron los if 
  */
    if(n1>n2 & n1>n3 & n1>n4){
     document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n1+"");
      if(n2<n1 & n2<n3 & n2<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n2+"");
      }
      if(n3<n1 & n3<n2 & n3<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n3+"");
      }
      if(n4<n1 & n4<n2 & n4<n3){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n4+"");
      }
    }
    if(n2>n1 & n2>n3 & n2>n4){
     document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n2+"");
      if(n1<n2 & n1<n3 & n2<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n1+"");
      }
      if(n3<n1 & n3<n2 & n3<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n3+"");
      }
      if(n4<n1 & n4<n2 & n4<n3){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n4+"");
      }
    } 
  
   if(n3>n1 & n3>n2 & n3>n4){
     document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n3+"");
      if(n1<n3 & n1<n2 & n2<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n1+"");
      }
      if(n2<n1 & n2<n3 & n2<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n2+"");
      }
      if(n4<n1 & n4<n2 & n4<n1){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n4+"");
      } 
    }
    if(n4>n1 & n4>n2 & n4>n3){
      document.formulario_mayor_menor.resultadoo.value=("el numero mayor es"+n4+"");
      if(n1<n2 & n1<n3 & n2<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n1+"");
      }
      if(n2<n1 & n2<n3 & n2<n4){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n2+"");
      }
      if(n3<n1 & n3<n2 & n3<n1){
         document.formulario_mayor_menor.resultado.value=("el numero menor es"+n3+"");
      } 
    }
    if(n1==n2 & n3==n4){
      document.write.value=alert("numeros iguales");
    }
  
  }
  /*---------------------tabla de multiplicar-----------------------------------------------------*/
  function tabla(){
    var n = parseInt(document.multi.numero.value);
    var r = "";
  
   if (n>9  || n<2){
      document.write.value= alert("el numero esta fuera de la escala vuelve a ingresar nuevamente el numero");
   }
   else{
    for (var i= 1; i<=10 ;i++){
    r= r+ n + 'x'  +i +'=' + (n * i)+'<br>' ;
    var result =document.getElementById("resultado");
    result.innerHTML =r;
   }
   }
  }
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