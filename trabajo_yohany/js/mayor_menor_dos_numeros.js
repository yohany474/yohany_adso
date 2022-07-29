
 /*--------------------mayor menor 2 numeros-------------------------------------*/
 function mayor_dos(){

    var n1= parseInt(document.dosnumeros.n1.value);
    var n2= parseInt(document.dosnumeros.n2.value);
    if(n1>n2){
      document.dosnumeros.resultado_mayor.value=(n1);
      document.dosnumeros.resultado_menor.value=(n2);
   }
   else if(n1<n2){
      document.dosnumeros.resultado_mayor.value=(n2);
      document.dosnumeros.resultado_menor.value=(n1);
   }
   else if(n1==n2){
    document.write.value= alert("los numeros son iguales");
   }
 }