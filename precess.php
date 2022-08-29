<?php
$conn = mysqli_connect('localhost', 'root', '', 'my_portfolio_20211113');
echo 'Processing.. '; 

//Check for Get Variable
if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'POST:Your name is:'. $name; 

    $query = "Insert into json(name) VALUES('$name')"; 
    if(mysqli_query($conn, $query)){
        echo 'User Added... ';
    }else {
        echo 'Error:'.mysqli_error($conn); 
    }
}

//Check for Get Variable
if(isset($_GET['name'])){
    echo 'GET:Your name is:'. $_GET['name']; 
}
?>