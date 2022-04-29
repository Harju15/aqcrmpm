<?php
$email = $_POST['email'];
$password = $_POST['userpassword'];
$confirmpassword = $_POST['confirmpassword'];

//database connection
$conn = new mysqli('localhost', 'aqcrm_user','','aqcrm');
if($conn->connect_error){
    die('connection failed : ' .$conn->connect_error);

}else{
    $stmt = $conn->prepare("insert into user_table(email, userpassword, confirmpassword) value(?,?,?)")
    $stmt->bind_param("sss", $email, $password, $confirmpassword);
    $stmt->execute();
    echo "signup successful...";
    $stmt->close();
    $conn->close();
}

?>