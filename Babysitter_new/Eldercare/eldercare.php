<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $to = "your-email@example.com"; 
    $subject = "New Elder Care Service Inquiry";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message";
    
    $headers = "From: $email";
    
    
    mail($to, $subject, $email_content, $headers);
    
    
    header("Location: eldercare.html?message=success");
    exit();
}
?> 