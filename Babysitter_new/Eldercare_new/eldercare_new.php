<?php

include '../db.php';  
session_start();
header('Content-Type: application/json');


if (!isset($conn)) {
    $host = 'localhost';
    $dbname = 'maid_service';  
    $username = 'root';        
    $password = '';          

    try {
        $conn = new mysqli($host, $username, $password, $dbname);
        if ($conn->connect_error) {
            throw new Exception("Connection failed: " . $conn->connect_error);
        }
    } catch(Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Database connection error: ' . $e->getMessage()
        ]);
        exit();
    }
}

try {
    
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }

    
    $required_fields = ['maid_id', 'customer_name', 'customer_email', 'customer_phone', 'care_duration', 'booking_date'];
    foreach ($required_fields as $field) {
        if (!isset($data[$field]) || empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }

    
    $create_table_sql = "
    CREATE TABLE IF NOT EXISTS eldercare_bookings (
        booking_id INT PRIMARY KEY AUTO_INCREMENT,
        maid_id INT NOT NULL,
        customer_name VARCHAR(100) NOT NULL,
        customer_email VARCHAR(100) NOT NULL,
        customer_phone VARCHAR(20) NOT NULL,
        customer_address TEXT,
        care_duration VARCHAR(50) NOT NULL,
        booking_date DATE NOT NULL,
        requirements TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $conn->query($create_table_sql);

    
    $stmt = $conn->prepare("
        INSERT INTO eldercare_bookings (
            maid_id, customer_name, customer_email, customer_phone, 
            customer_address, care_duration, booking_date, requirements
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");

    if (!$stmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param(
        "isssssss",
        $data['maid_id'],
        $data['customer_name'],
        $data['customer_email'],
        $data['customer_phone'],
        $data['customer_address'],
        $data['care_duration'],
        $data['booking_date'],
        $data['requirements']
    );

    if ($stmt->execute()) {
        $booking_id = $conn->insert_id;
        echo json_encode([
            'success' => true,
            'message' => 'Booking successful',
            'booking_id' => $booking_id
        ]);
    } else {
        throw new Exception("Execute failed: " . $stmt->error);
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}

$stmt->close();
$conn->close();

// Store chat message if present
if (isset($data['message'])) {
    try {
        $stmt = $pdo->prepare("
            INSERT INTO chat_messages (
                user_id,
                message_text,
                message_type
            ) VALUES (
                :user_id,
                :message_text,
                :message_type
            )
        ");
        
        $stmt->execute([
            'user_id' => $_SESSION['user_id'] ?? null,
            'message_text' => $data['message'],
            'message_type' => 'user'
        ]);
    } catch(PDOException $e) {
        // Log chat error but don't affect booking response
        error_log('Chat message storage error: ' . $e->getMessage());
    }
}
?> 