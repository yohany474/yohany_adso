//calculadora
function sumar () {//funcion de sumar
    var a1 = parseInt(document.form1.numero1.value);
    var a2 = parseInt(document.form1.numero2.value);
    document.form1.resultado.value=a1+a2;
  
  }
  function restar () {//funcion de restar
    var a1 = parseInt(document.form1.numero1.value);
    var a2 = parseInt(document.form1.numero2.value);
    document.form1.resultado.value=a1-a2;
  }
  function multiplicar () {//funcion de multiplicar
    var a1 = parseInt(document.form1.numero1.value);
    var a2 = parseInt(document.form1.numero2.value);
    document.form1.resultado.value=a1*a2;
  } 
  function dividir () {//funcion de dividir
    var a1 = parseInt(document.form1.numero1.value);
    var a2 = parseInt(document.form1.numero2.value);
    document.form1.resultado.value=a1/a2;
  }