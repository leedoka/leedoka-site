<!-- <?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     if (isset($_POST['name'])) {$name = $_POST['name'];}
//     if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
//     if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

//     $to = "leedoka@mail.ru"; /*Укажите адрес, на который должно приходить письмо*/
//     $sendfrom   = "lidy_sh@mail.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
//     $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
//     $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
//     $headers .= "MIME-Version: 1.0\r\n";
//     $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
//     $subject = "$formData";
//     $message = "$formData<br> <b>Имя клиента:</b> $name <br><b>Телефон:</b> $phone";
//     $send = mail ($to, $subject, $message, $headers);
//     if ($send == 'true')
//     {
//     echo '<center><p class="success">Спасибо за отправку вашего сообщения!</p></center>';
//     }
//     else
//     {
//     echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
//     }
// } else {
//     http_response_code(403);
//     echo "Попробуйте еще раз";
// }
?> -->

<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.timeweb.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'leedoka@cm07338.tmweb.ru';                     //SMTP username
    $mail->Password   = 'Alistan1066';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 25;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}

    //Recipients
    $mail->setFrom('leedoka@mail.ru', 'Mailer');
    $mail->addAddress('lidy_sh@mail.ru', 'Joe User');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = "$formData<br> <b>Имя клиента:</b> $name <br><b>Телефон:</b> $phone";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
