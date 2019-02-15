  function validarYEnviar(){
     
    var mensaje = $("#message").val();
  var nombre = $("#name").val();
  var email = $("#email").val();
  var asunto =$("#subject").val();

  var emailValido=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var nombreEstaValidado=false;
    var emailEstaValidado=false;
    var asuntoEstaValidado=false;

  


    if(nombre.length==0){

 	 	$("#name-error").fadeIn();
      	nombreEstaValidado=false; 

    }else{
		$("#name-error").fadeOut(); 
		nombreEstaValidado=true;    
    } 

    if(email.length==0||email.search(emailValido)){


      	$("#email-error").fadeIn();
      	emailEstaValidado=false;

    }else{
    	$("#email-error").fadeOut();    
	 	emailEstaValidado=true; 
    }

    if(asunto.length==0){

 	 	$("#subject-error").fadeIn();
  		asuntoEstaValidado=false; 

    }else{
	 	$("#subject-error").fadeOut(); 
    	asuntoEstaValidado=true;  
    } 





  

    if(nombreEstaValidado==true&&emailEstaValidado==true&&asuntoEstaValidado==true){
      
      $( "#contact-form" ).prepend( '<div id="preloader-cont"><div class="spinner-sm spinner-sm-1" id="status"> </div></div>' );

      $.ajax({
          data:{mensaje:mensaje,nombre:nombre,email:email,asunto:asunto},
          
          url:'ajax/enviarEmail.php',
    
          type:'POST',
    
          success:function(response){
    
          $("#preloader-cont").fadeOut();
                  $('#sendmessage').show();

                  console.log(response);
    
          }
      });


    }

}