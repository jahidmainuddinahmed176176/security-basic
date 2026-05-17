const fs = require('fs');

// Read the captured Burp request
const data = fs.readFileSync('login_request.txt', 'utf8');

console.log("[+] Analyzing Burp captured request...\n");

// Extract username and password
const userMatch = data.match(/username=([^&]+)/);
const passMatch = data.match(/password=([^&]+)/);

console.log("=== EXTRACTED CREDENTIALS ===");
if (userMatch) console.log("Username:", decodeURIComponent(userMatch[1]));
if (passMatch) console.log("Password:", decodeURIComponent(passMatch[1]));

// Save results
const output = `Extracted: Username=${userMatch?.[1] || 'N/A'} | Password=${passMatch?.[1] || 'N/A'}`;
fs.writeFileSync('extracted_creds.txt', output);

console.log("\n[+] Saved to extracted_creds.txt");