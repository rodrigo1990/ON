<?php  
	require("../class.phpmailer.php");
  $mensaje = $_POST['mensaje'];
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $asunto  =$_POST['asunto'];

  $cuerpo = "";
  $mail = new PHPMailer();
    $mail->Host = "localhost";
    $mail->IsHTML(true);
      
    $cuerpo  = "
      <table style='font-size:1rem;margin-left: auto;margin-right: auto;font-family:arial;border-radius:10px;background-color: #f3f3ff;border:30px solid #f3f3ff;text-align:center; '>";

    $cuerpo.="<tr>
              <td>
              <img src='http://www.estudiodarwin.com.ar/img/Darwin-tortugas-01.png' style='font-size: 1rem;margin-left: auto;margin-right: auto;font-family: arial;border-radius: 10px;background-color: #2D2D2D;color: white;padding: 33px;border: 30px solid #f3f3ff;text-align: center;'>
              </td>
            </tr>";

   
    $cuerpo .="<tr>";
      $cuerpo .="<td style='text-align:center'>";
        $cuerpo .= "<b>Nombre</b>: ".$nombre."<br>";
        $cuerpo .= "<b>Email</b>: ".$email."<br>";
        $cuerpo .= "<b>Comentarios</b>: ".$mensaje."<br>";
        
      $cuerpo .="</td>";
    $cuerpo .="</tr>";
  
    $cuerpo.="</table>";


   $mail->From = "consultoriofolco@gmail.com";
    $mail->FromName = "ON - ODONTOLOGÍA";
   $mail->Subject = "Consulta via whatsapp";
   $mail->Subject = $asunto;
    $mail->AddAddress("consultoriofolco@gmail.com","ON");


    $mail->Body = $cuerpo;
     $mail->AltBody = "";
     $mail->Send();


     echo "mensaje enviado";


?>