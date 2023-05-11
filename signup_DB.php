<?php

session_start();
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\Test\SendTestCase;

$check = false;

if(isset($_POST['email']) || isset($_SESSION['verifcode'])){
    $_SESSION['email'] = $_POST['email'] ?? $_SESSION['email'];
if(isset($_SESSION['verificationcode']) && isset($_POST['verifcode']) ){
    $check = $_POST['verifcode'] == $_SESSION['verificationcode'];
    unset($_SESSION['verificationcode']);
} else {


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// SMTP server configuration
$smtp_server = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_username = 'medsaifeddinek@gmail.com';
$smtp_password = 'dcjqazbseqaowtai';

// Create PHPMailer instance
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = $smtp_server;
$mail->Port = $smtp_port;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = $smtp_username;
$mail->Password = $smtp_password;


// Email settings
$code = random_string(32);
$_SESSION['verificationcode'] = $code;

$to = $_SESSION['email'];
$subject = 'Code de verification';
$message = $code;
$mail->setFrom($smtp_username, 'Your Name');
$mail->addAddress($to);
$mail->Subject = $subject;
$mail->Body = $message;

// Send email
if($mail->send()) {
    echo 'Email sent successfully !';

} else {
    echo 'Email sending failed: ' . $mail->ErrorInfo;
}

}
} else {
    
}

function random_string($length) {
    $str = random_bytes($length);
    $str = base64_encode($str);
    $str = str_replace(["+", "/", "="], "", $str);
    $str = substr($str, 0, $length);
    return $str;
}
        
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Créer votre compte - MapYourWay</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="signup_style.css">
</head>
<body>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="container">
            <div>
                <img id="logo" src="logo_insat.png" class="img-fluid" alt="Logo">
            </div> <hr>
            <div class="left_card">
                <h1 id="project_name" class="mt-3 mb-0 text-primary"> INSAT</h1>
                <p id="project_slogan" class="lead text-secondary"> Carte Virtuelle Interactive</p>
                <p id="project_slogan2" class="lead text-secondary"> Explorez votre institut comme jamais auparavant</p>
            </div>
            <div class="right_card">
                <div class="card-img-top">
                    <h4  style="background-color: limegreen; border-color: limegreen;">Vérification email institutionnel</h4>
                </div>
                <div class="card-body" >
                <form method="post" onsubmit="return validateCode( <?= $count ?>)" id="signup-form" action= <?= $check ? "signup.php" : "signup_DB.php" ?> >
                        <div class="form-group mb-3">
                        <label > <?= $check ? "Verifié ! continuer ?" : "Code de verification" ?> </label> <br>
                        <?php if (!$check): ?>
                            <input type= "password" class="form-control" id="verifcode" name="verifcode"  style="display" required>
                        <?php endif; ?>
                        </div>

                        <div class="d-grid gap-2">
                            <button type= "submit"  name="createButton" class="btn btn-primary">  Créer mon compte</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
</div>
<script src="verifMail.js"></script>
</body>
</html>
