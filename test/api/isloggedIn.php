<?php
session_start();
if(isset($_SESSION['login']))
{
   
    echo '{"status":true}';
     
        } else{
        
    echo'{"status": false}' ;

        }
?>