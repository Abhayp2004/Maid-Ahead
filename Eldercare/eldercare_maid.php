<?php
include '../db.php';
session_start();
header('Content-Type: application/json');

try {
   
    $create_table_sql = "
    CREATE TABLE IF NOT EXISTS eldercare_maid_bookings (
        booking_id INT PRIMARY KEY AUTO_INCREMENT,
        maid_id INT NOT NULL,
        customer_name VARCHAR(100) NOT NULL,
        customer_email VARCHAR(100) NOT NULL,
        customer_phone VARCHAR(15) NOT NULL,
        requirements TEXT,
        booking_date DATE NOT NULL,
        care_duration VARCHAR(50) NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $conn->query($create_table_sql);

    
    $data = json_decode(file_get_contents('php://input'), true);

    
    $required_fields = ['maid_id', 'customer_name', 'customer_email', 'customer_phone', 'booking_date', 'care_duration'];
    foreach ($required_fields as $field) {
        if (!isset($data[$field]) || empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }

    
    $stmt = $conn->prepare("
        INSERT INTO eldercare_maid_bookings (
            maid_id,
            customer_name,
            customer_email,
            customer_phone,
            requirements,
            booking_date,
            care_duration,
            status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')
    ");
    
    $stmt->bind_param("issssss",
        $data['maid_id'],
        $data['customer_name'],
        $data['customer_email'],
        $data['customer_phone'],
        $data['requirements'],
        $data['booking_date'],
        $data['care_duration']
    );

    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Booking successful!',
            'booking_id' => $conn->insert_id
        ]);
    } else {
        throw new Exception("Failed to save booking");
    }

} catch(Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}

$stmt->close();
$conn->close();
?> 