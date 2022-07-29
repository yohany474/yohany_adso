//factura un producto 
function facturaproducto(){

    var cliente = document.getElementById("cliente").value;
    var producto = document.getElementById("producto").value;
    let codigo = parseInt(document.factura.codigo.value);
    var precio = parseInt(document.factura.precio.value);
    var cantidad =  parseInt(document.factura.cantidad.value);
    var menucases = document.getElementById("descuento").value;
    var valor_t, descuento, valor_final ;
    var ds = 20;
    var dc = 5;
    
  
    switch(menucases){
  
    case "20%descuento":  
      valor_t = cantidad * precio; //precio total
      descuento=valor_t*ds/100;   //descuento del 20 %
      valor_final= valor_t - descuento;   //se aplica el descuento
      document.factura.rcliente.value=(cliente);
      document.factura.rproducto.value=(producto);
      document.factura.rcodigo.value=(codigo);
      document.factura.rprecio.value=(precio);
      document.factura.rcantidad.value=(cantidad);
      document.factura.rdescuento.value=(descuento);
      document.factura.rvalorfinal.value=("este es el valor final de toda su compra incluido el 20% de descuento: "+valor_final);
  
     
      
    break;
  
    case "5%descuento":  
      valor_t = cantidad * precio;  //precio total
      descuento=valor_t*dc/100;   //descuento del 5%
      valor_final= valor_t - descuento;   //se aplica el descuento
      document.factura.rcliente.value=(cliente);
      document.factura.rproducto.value=(producto);
      document.factura.rcodigo.value=(codigo);
      document.factura.rprecio.value=(precio);
      document.factura.rcantidad.value=(cantidad);
      document.factura.rdescuento.value=(descuento);
      document.factura.rvalorfinal.value=("este es el valor final de toda su compra incluido el 5 % de descuento: "+valor_final);
    break;
  
    case "tarjeta-credito":
      valor_t = cantidad * precio;  //precio total
      document.factura.rcliente.value=(cliente);
      document.factura.rproducto.value=(producto);
      document.factura.rcodigo.value=(codigo);
      document.factura.rprecio.value=(precio);
      document.factura.rcantidad.value=(cantidad);
      document.factura.rdescuento.value=("no aplica");
      document.factura.rvalorfinal.value=("este es el valor final de toda su compra si ningun descuento: "+valor_t);
    break;         
  
    }
  
  
  
  
  
  }