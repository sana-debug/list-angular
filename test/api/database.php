<?php
session_start();

$user = $_SESSION['login'];

if($user == 'admin'){
    ?>
    {"success":true,"message": "this is a secret no one knows but the admistrator"}
    <?php 

    }
    else{
    ?>
    {"success": false,"message": "who the f are you"} 
    <?php 
        
    }


?>