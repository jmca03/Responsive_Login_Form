<?php
    $conn = mysqli_connect('localhost', 'root', '');
    if(!$conn)
    {
        die("Could not connect: " . mysqli_error($conn));
    }
    $createDb = "CREATE SCHEMA IF NOT EXISTS 
                `dblogin_credential_exam` DEFAULT CHARACTER SET utf8";

    mysqli_query($conn, $createDb);
    mysqli_select_db($conn, 'dblogin_credential_exam');

    
    $createTbl = "CREATE TABLE IF NOT EXISTS `users` (
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `name` varchar(100) NOT NULL,
        `password` varchar(100) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `name-idx` (`name`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=3";

    $check = mysqli_query($conn, $createTbl);

    if($check)
    {

    }
    else
    {
        echo mysqli_error($conn);
    }

    $chkLoginCredential = "SELECT name FROM users";

    $chkRes = mysqli_query($conn, $chkLoginCredential);

    if(mysqli_num_rows($chkRes) <= 0)
    {
        $namePass = md5("password");
        $fooPass = md5("bar");
        $insCredential = "INSERT INTO 
                        `users` (`id`, `name`, `password`) VALUES
                        (1, 'name', '$namePass'),
                        (2, 'foo', '$fooPass')";

        mysqli_query($conn, $insCredential);
    }
    else
    {
        //DO NOTHING
    }

    session_start();
    
    if(!isset($_SESSION['u'])) //NOT LOGGED IN
    {
       session_destroy();
        $data = [];
        $data[] = array(
            "response" => "NOT LOGGED"
        );
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($data);
    }
    else //ALREADY LOGGED IN
    {
        if($_SESSION['u'] == 'MISMATCH') //MISMATCH
        {
            if(isset($_SESSION['u']))
            {
                unset($_SESSION['u']);
                session_destroy();
            }
            $data = [];
            $data[] = array(
                "response" => "MISMATCH"
            );
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($data);
        }
        else //LOGGED IN
        {
            $data = [];
            $data[] = array(
                "response" => "LOGGED"
            );
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($data);
        }
    }

?>