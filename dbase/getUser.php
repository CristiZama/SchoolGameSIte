<!DOCTYPE html>
<html>
<head>
    <title>GetUsers</title>
</head>
<body>
    <?php

    $connect = mysqli_connect('sql110.unaux.com', 'unaux_31483017', 'fefzx1lhu0id', 'unaux_31483017_crisdb');

    $query = "SELECT id, password FROM users WHERE username = ".$_GET['uname'];
    $result = mysqli_query($connect, $query);

    while( $record = mysqli_fetch_assoc($result) )
    {
        echo json_encode($record);
    }
    ?>
</body>
</html>