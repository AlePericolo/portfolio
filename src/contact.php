<?php
/**
 * Created by PhpStorm.
 * User: alessandro
 * Date: 28/01/19
 * Time: 11.34
 */

$data = json_decode(file_get_contents("php://input"));

if (json_last_error() == JSON_ERROR_NONE){

    $to = "ale.pericolo@gmail.com";

    $subject = $data->subject;

    $message = $data->message.'<br><br>';
    $message .= "From: ".$data->email .'<br>';
    $message .= "Send by: alessandropericolo14.altervista.org".'<br><br><br>';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: alessandropericolo14@altervista.org'. "\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    //php mail function to send email on your email address
    return mail($to, $subject, $message, $headers);

}else{
    echo 'error';
}