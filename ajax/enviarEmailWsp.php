<?php  
	require("../class.phpmailer.php");

  $nombre = $_POST['nombre'];
  $telefono = $_POST['telefono'];
  $email  = $_POST['mail'];


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
        $cuerpo .= "<b>Telefono</b>: ".$telefono."<br>";
        $cuerpo .= "<b>Email</b>: ".$email."<br>";
        
      $cuerpo .="</td>";
    $cuerpo .="</tr>";
  
    $cuerpo.="</table>";


  $mail->From = "consultoriofolco@gmail.com";
    $mail->FromName = "ON - ODONTOLOGIA";
   $mail->Subject = "Consulta via whatsapp";
    $mail->AddAddress("mcd77.1990@gmail.com","ON");

    $mail->Body = $cuerpo;
     $mail->AltBody = "";
     $mail->Send();


     echo "mensaje enviado";



?>