<?php
include '../db.php';  // Make sure this path is correct
session_start();
header('Content-Type: application/json');

// Database connection details - use these if db.php connection fails
if (!isset($conn)) {
    $host = 'localhost';
    $dbname = 'maid_service';  // Your database name
    $username = 'root';        // Your MySQL username
    $password = '';           // Your MySQL password

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
    // Get JSON data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }

    // Validate required fields
    $required_fields = ['maid_id', 'customer_name', 'customer_email', 'customer_phone', 'care_duration', 'booking_date'];
    foreach ($required_fields as $field) {
        if (!isset($data[$field]) || empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }

    // Create bookings table if it doesn't exist
    $create_table_sql = "
    CREATE TABLE IF NOT EXISTS babysitter_bookings (
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

    // Insert booking
    $stmt = $conn->prepare("
        INSERT INTO babysitter_bookings (
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
?> 