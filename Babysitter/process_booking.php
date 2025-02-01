<?php
// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "maidservice_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process booking form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $maid_id = $_POST['maid_id'];
    $client_name = $_POST['client_name'];
    $client_email = $_POST['client_email'];
    $booking_date = $_POST['booking_date'];
    $service_hours = $_POST['service_hours'];
    
    $sql = "INSERT INTO bookings (maid_id, client_name, client_email, booking_date, service_hours)
            VALUES (?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isssi", $maid_id, $client_name, $client_email, $booking_date, $service_hours);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Booking successful!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error in booking"]);
    }
    
    $stmt->close();
}

$conn->close();
?> 