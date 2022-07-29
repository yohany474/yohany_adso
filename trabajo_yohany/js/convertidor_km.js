//conversor de medidas 
function converter_unidades(){
    var main = document.getElementById("converter_unidad").value;
    var n1 = parseInt(document.conversor.numero_uno.value);

    switch(main){
     case "kilometros" :
      document.conversor.resultado_conversor.value= (n1/1000+" kilometros");
     break; 
     case "decametros" :
      document.conversor.resultado_conversor.value= (n1/10+" decametros");
     break; 
     case "decimetros" :
      document.conversor.resultado_conversor.value= (n1*10+" decimetros");
     break; 
    }
  
} 