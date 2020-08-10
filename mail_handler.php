<?php
$name = $_POST['pearson_name'];
$visitor_email = $_POST['email_address'];
$phone_number = $_POST['phone_number'];
$message = $_POST['message'];

$email_address = 'aleale@gmail.com';
$email_subject = "Nowy kontakt ze strony Signuz!";
$email_body = "To nowa wiadomość od: $name.\n".
                "Treść: $message.\n";

$to = "witus2706@gmail.com";
$headers = "From: $email_address \r\n";
$headers .= "Reply to: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html");
?>