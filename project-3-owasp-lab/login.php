<?php
// VULNERABLE CODE - DO NOT USE ON REAL WEBSITES
$username = $_POST['username'];
$password = $_POST['password'];

// DANGER: Direct injection of user input into SQL query
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

echo "<h2>Login Attempt Result</h2>";
echo "<p><strong>Query executed:</strong><br><code>" . htmlspecialchars($sql) . "</code></p>";

// Simulate database check
if (strpos($username, "' OR 1=1--") !== false) {
    echo "<p style='color: red'>✅ LOGIN SUCCESSFUL (SQL Injection worked!)</p>";
    echo "<p>You bypassed authentication! This should not happen on secure sites.</p>";
} elseif ($username == "admin" && $password == "admin123") {
    echo "<p style='color: green'>✅ Login successful as Admin</p>";
} else {
    echo "<p style='color: red'>❌ Login failed - Invalid credentials</p>";
}

echo '<br><a href="login.html">← Try again</a>';
?>