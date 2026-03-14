<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo "error";
    exit;
}

function clean_input($value) {
    return trim(htmlspecialchars($value ?? "", ENT_QUOTES, "UTF-8"));
}

$name = clean_input($_POST["name"] ?? "");
$email = clean_input($_POST["email"] ?? "");
$organization = clean_input($_POST["organization"] ?? "");
$projectType = clean_input($_POST["projectType"] ?? "");
$message = clean_input($_POST["message"] ?? "");

if (empty($name) || empty($email) || empty($projectType) || empty($message)) {
    echo "error";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "error";
    exit;
}

$to = "info@codeherllc.com";
$subject = "New Quote Request - CodeHeR LLC";

$emailBody = "You received a new quote request from the CodeHeR LLC website.\n\n";
$emailBody .= "Name: " . $name . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Business or Organization: " . $organization . "\n";
$emailBody .= "Project Type: " . $projectType . "\n\n";
$emailBody .= "Project Details:\n" . $message . "\n";

$headers = "From: info@codeherllc.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $emailBody, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>