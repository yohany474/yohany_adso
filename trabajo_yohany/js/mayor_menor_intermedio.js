
/******************funcion para menor mayor intermedio ********************************************/
function  mayor_menor(){
    //se dan valores a variables desde el formulario_mayor_menor principal
     var n1 = parseInt(document.formulario.primero.value);
     var n2 = parseInt(document.formulario.segundo.value);
     var n3 = parseInt(document.formulario.tercero.value);
    /*condicion para comparar numeros
    mayor menor intermedio desde linea 11
    hasta la linea 83
    */
    if( n1<n2 & n2<n3){
      document.formulario.resultadoo.value=(""+n11+"");
      document.formulario.resultadooo.value=(""+n22+"");
      document.formulario.resultado.value=(""+n33+"");
    }
    else if(n1<n3 & n3<n2){
      document.formulario.resultadoo.value=(""+n1+"")
      document.formulario.resultadooo.value=(""+n3+"");
      document.formulario.resultado.value=(""+n2+"");
    } 
    else if(n2<n1 & n1<n3){
      document.formulario.resultadoo.value=(""+n2+"")
      document.formulario.resultadooo.value=(""+n1+"");
      document.formulario.resultado.value=(""+n3+"");
    }
    else if(n2<n3 & n3<n1){
      document.formulario.resultadoo.value=(""+n2+"")
      document.formulario.resultadooo.value=(""+n3+"");
      document.formulario.resultado.value=(""+n1+"");
    }
    else if(n3<n1 & n1<n2){
      document.formulario.resultadoo.value=(""+n3+"")
      document.formulario.resultadooo.value=(""+n1+"");
      document.formulario.resutado.value=(""+n2+"");
    }
    else if(n3<n2 & n2<n1){
      document.formulario.resultadoo.value=(""+n3+"")
      document.formulario.resultadooo.value=(""+n2+"");
      document.formulario.resultado.value=(""+n1+"");
    }
    /*condicionales para el
     caso de haber numeros iguales 
     desde la linea 73 hasta linea 116
    */
    else if(n1==n2 & n2==n3){
     document.write.value= alert("todos los numeros son iguales");
 
    }
    else if (n1==n3 ){
      document.formulario.value=("es igual el numero "+n1+"y el numero "+n3+"");
      if(n1>n2){
        document.formulario.resultadoo.value=(" "+n2+"");
        document.formulario.resultadooo.value=("intermedio no hay");
        document.formulario.resultado.value=(" "+n1+"");
      }
      if(n1<n2){
        document.formulario.resultadoo.value=(" "+n1+"");
        document.formulario.resultadooo.value=("intermedio no hay");
        document.formulario.resultado.value=(" "+n2+"");
      }
    }
    else if(n2==n1){
      document.formulario.value=("es igual el numero"+n2+"y el numero"+n1+"");
      if(n2<n3){
        document.formulario.resultadoo.value=(" "+n2+"");
        document.formulario.resultadooo.value=("intermedio no hay");
        document.formulario.resultado.value=(" "+n3+"");
  
      }
      if(n2>n3){
        document.formulario.resultadoo.value=(" "+n3+"");
        document.formulario.resultadooo.value=("intermedio no hay");
        document.formulario.resultado.value=(" "+n2+"");
      }
    }
    else if(n2==n3){
      if(n2<n1){
        document.formulario.resultadoo.value=(" "+n2+"");
        document.formulario.resultadooo.value=("intermedio no hay");
        document.formulario.resultado.value=(" "+n1+"");
      }
      if(n2>n1){
        document.formulario.resultadoo.value=(" "+n1+"");
        document.formulario.resultadooo.value=("intermedio no hay");
        document.formulario.resultado.value=(" "+n2+"");
      }
    }
 } //  termina funtion mayor_i
 