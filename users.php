<?php
//https://www.youtube.com/watch?v=82hnvUYY6QA


$conn = mysqli_connect('localhost', 'root', '', 'my_portfolio_20211113');
$query = 'select * from json';

//Get Result
$result = mysqli_query($conn, $query);

//Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC); 

echo json_encode($users); 
?>