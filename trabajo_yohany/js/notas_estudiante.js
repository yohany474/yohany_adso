  //notas del estudiante 
  function notasde(){
    
    let nom = document.getElementById("name").value;
    let n1 = parseInt(document.notas_estudiante.nota1.value);
    let n2 = parseInt(document.notas_estudiante.nota2.value);
    let n3 = parseInt(document.notas_estudiante.nota3.value);
    let n4 = parseInt(document.notas_estudiante.nota4.value);
    let n5 = parseInt(document.notas_estudiante.nota5.value);
    const  not1 = 0.50;
    const  not2 = 0.15;
    const  not3 = 0.35;
    const  not4 = 0.2;
    const  not5 = 0.1;
    let nota_final;
    let m1,m2,m3,m4,m5;
    nota_final = n1*not1+n2*not2+n3*not3+n4*not4+n5*not5;


    if(n1 >0 & n1<=5.0 & n2 >0 & n2<=5.0 & n3 >0 & n3<=5.0 & n4 >0 & n4<=5.0 & n5 >0 & n5<=5.0 ){
    
    if(nota_final < 2.9){
     document.notas_estudiante.estado.value=("DEFICIENTE");
     document.notas_estudiante.promedio.value=(nota_final); 
     document.notas_estudiante.namee.value=(nom); 
    }
    else if(nota_final > 3.0 & nota_final <=3.5) {
     document.notas_estudiante.estado.value=("ACEPTABLE");
     document.notas_estudiante.promedio.value=(nota_final);  
     document.notas_estudiante.namee.value=(nom); 
    } 
    else if(nota_final > 3.5 & nota_final <4.0) {
     document.notas_estudiante.estado.value=("BUENO");
     document.notas_estudiante.promedio.value=(nota_final); 
     document.notas_estudiante.namee.value=(nom);  
   }
    else if(nota_final > 4.0 & nota_final <5.0) {
      document.notas_estudiante.estado.value=("EXELENTE");
      document.notas_estudiante.promedio.value=(nota_final); 
      document.notas_estudiante.namee.value=(nom);  
    }
  }
  else{
  alert ("ingresa numeros menores  o iguales a 5 para hacer el calculo ");
  } 
 }