  function enviarWsp(){
     
  var nombre = $("#nombre-wsp").val();
  var telefono = $("#telefono-wsp").val();
  var mail  = $("#email-wsp").val();

  var emailValido=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var soloNumeros=/^[0-9]*$/;
  var nombreEstaValidado=false;
  var telefonoEstaValidado=false;
  var emailEstaValidado=false;




    if(nombre.length==0){

      $("#nombre-error").fadeIn();
      nombreEstaValidado=false; 

    }else{
    $("#nombre-error").fadeOut(); 
    nombreEstaValidado=true;    
    } 

   


    if(telefono.length>13 || telefono.length==0 || telefono.search(soloNumeros)){

      $("#telefono-error").fadeIn();
      telefonoEstaValidado=false;

    }else{

      $("#telefono-error").fadeOut();
      telefonoEstaValidado=true;

    }




    if(mail.length==0 || mail.search(emailValido)){

      $("#email-error-wsp").fadeIn();
      emailEstaValidado=false;

    }else{

      $("#email-error-wsp").fadeOut();
      emailEstaValidado=true;

    }

   

  

    if(nombreEstaValidado==true&&telefonoEstaValidado==true&&emailEstaValidado==true){      
      $( ".interfaceFormBody" ).prepend( '<div id="preloader"><div class="spinner-sm spinner-sm-1" id="status"> </div></div>' );

      $.ajax({
          data:{nombre:nombre,telefono:telefono,mail:mail},
          
          url:'ajax/enviarEmailWsp.php',
    
          type:'POST',
    
          success:function(response){
    
          $("#preloader").fadeOut();

          $("#nombre-wsp").val("");
          $("#telefono-wsp").val("");

          window.location.replace("https://api.whatsapp.com/send?phone=5491167543012");


          console.log(response);



              
          }
      });


    }

}
