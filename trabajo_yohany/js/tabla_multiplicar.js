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