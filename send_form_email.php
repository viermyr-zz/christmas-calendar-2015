<?php
 
if(isset($_POST['email'])) {
 

  $email_to = "m.viermyr@gmail.com";

  $email_subject = "Første luke er åpnet"; 
   

  $email_from = $_POST['email']; // required
   
  $error_message = "";

  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';


  $email_message = "Form details below.\n\n";

   

  function clean_string($string) {

    $bad = array("content-type","bcc:","to:","cc:","href");

    return str_replace($bad,"",$string);

  }

  $email_message .= "Email: ".clean_string($email_from)."\n";


  // Subject of confirmation email.
  $conf_subject = 'Gratulere! Din julekalender har offisielt startet!';

  // Who should the confirmation email be from?
  $conf_sender = 'Elsker deg <elsker@deg.no>';

  $msg = "Hei, elskling!\n\nSom du kanskje har forstått så er dette ikke en vanlig julekalender. Det er en lock-up kalander!!\n\nLock-up kalendere følger ett annet regelsett enn tradisjonelle kalendere.\nHver luke inneholder en nøtt.\nHvis du klarer å løse den, vil det skjulte tegnet komme til syne.\nDette tegnet vil matche en av pakkene din, og vil følgelig avsløre den gaven som skal åpnes.\nHvis du derimot ikke klarer å løse oppgaven eller svarer feil.......\n
  \nDu har nå blitt advart: Happy Calendar Games! And may the odds be ever in your favor!\n\nSiden du er er det nydeligste mennesket jeg noensinne har møtt, så har jeg gjort denne første oppgaven veldig enkel... Så snill er jeg derimot ikke på de kommende oppgavene.\nDet første tegnet er: X\n\n
  PS! Jeg elsker deg<3";

  mail( $_POST['email'], $conf_subject, $msg, 'From: ' . $conf_sender );
     
 
     
 
  // create email headers
   
  $headers = 'From: '.$email_from."\r\n".
   
  'Reply-To: '.$email_from."\r\n" .
   
  'X-Mailer: PHP/' . phpversion();
   
  @mail($email_to, $email_subject, $email_message, $headers);  


  header('Location: index.html');

 
?>

 
 
<?php
 
}
 
?>