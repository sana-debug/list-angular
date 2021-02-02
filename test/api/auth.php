<?php
session_start();
$_POST = json_decode(file_get_contents('php://input'),true);
if(isset($_POST) && !empty($_POST)){
    $login = $_POST['login'];
    $pwd = $_POST['pwd'];
    if($login == 'admin' && $pwd=='admin'){
        $_SESSION['login'] = 'admin' ;
    ?>
{"success":true,"message": "this is a secret no one knows but the admin"}
 <?php 
    } else{
    ?>
{"success": false,"message": "invalid credentiels"} 
<?php 
} }else{
?>
{"success": false,"message": "only post acees acepted"} 
<?php       
}
?>
