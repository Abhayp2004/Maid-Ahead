<?php
header('Content-Type: application/json');

// Database connection details
$host = 'localhost';
$dbname = 'housekeeping_db';
$username = 'your_username';
$password = 'your_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get form data
    $housekeeper_id = $_POST['housekeeper_id'];
    $booking_date = $_POST['booking_date'];
    $booking_time = $_POST['booking_time'];

    // Insert booking into database
    $stmt = $pdo->prepare("INSERT INTO bookings (housekeeper_id, booking_date, booking_time, status) 
                          VALUES (:housekeeper_id, :booking_date, :booking_time, 'pending')");
    
    $stmt->execute([
        'housekeeper_id' => $housekeeper_id,
        'booking_date' => $booking_date,
        'booking_time' => $booking_time
    ]);

    // Send success response
    echo json_encode(['success' => true, 'message' => 'Booking successful!']);

} catch(PDOException $e) {
    // Send error response
    echo json_encode(['success' => false, 'message' => 'Booking failed: ' . $e->getMessage()]);
}
?> 