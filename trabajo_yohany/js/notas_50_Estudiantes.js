//notas 50 estudiante 

function notas(){
    var n = parseInt(document.nota_50.valori.value);
    var nota,name,nota,suma,nombre,max=0,men=5,user,aprobados=0,reprobados=0;
    
    for(var i =1; i<=n; i++){
      var name =prompt("ingrese nombre del estudiante"+i)
      var nota =prompt("ingrese nota"+i);
      suma+=nota;
      if (nota>=max){
       max=nota;
       nombre=name;
      }
      if(nota < men){
       men=nota;
       user=name;
      }
      if(nota < 3){
           
      reprobados=reprobados+1; //para los reprobados
      }
      else{
      aprobados=aprobados+1;  //para los aprobados
     } 
   
    }
    document.nota_50.notamenor.value=(men);
    document.nota_50.nombremenor.value=(user);
    document.nota_50.notamayor.value=(max);
    document.nota_50.nombremayor.value=(nombre);
    document.nota_50.aprobados.value=(aprobados);
    document.nota_50.reprobados.value=(reprobados);
   }
   
   