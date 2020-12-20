<?php
    $conn = mysqli_connect('localhost', 'root', '', 'dblogin_credential_exam');
    if(!$conn)
    {
        die("Could not connect: " . mysqli_error($conn));
    }

    if(isset($_POST['s']))
    {
        if(isset($_POST['user']))
        {
            $username = $_POST['user'];
        }
        else
        {
            $username = '';
        }

        if(isset($_POST['pass']))
        {
            $password = md5($_POST['pass']);
        }
        else
        {
            $passwords = '';
        }
        switch($_POST['s'])
        {
            case 0: //SIGN IN
                session_start();
                $user = "SELECT id FROM users WHERE
                        name = '$username' AND password = '$password'";
                $userResult = mysqli_query($conn, $user);
                if(mysqli_num_rows($userResult) <= 0)
                {
                    $_SESSION['u'] = 'MISMATCH'; //MISMATCH
                }
                else
                {
                    $userRow = mysqli_fetch_assoc($userResult);
                    $_SESSION['u'] = $userRow['id'];
                }
                break;
            case 1: //SIGN OUT
                    session_start();
                    session_unset();
                    session_destroy();
                break;
            default:
            break;
        }
    }

    
    if(!isset($_SESSION['u'])) //NOT LOGIN
    {
        if(isset($_SESSION['u']))
        {
            unset($_SESSION['u']);
            session_destroy();
        }
        $data = [];
        $data[] = array(
            "response" => "NOT LOGGED"
        );
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($data);
    }
    else
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