const { exec } = require('child_process');
const fs = require('fs');

const target = "127.0.0.1";
const timestamp = new Date().toISOString().replace(/:/g, '-');
const outputFile = `scan_results_${timestamp}.txt`;

console.log(`[+] Scanning ${target}...`);

exec(`nmap -sV ${target}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`[!] Error: ${error.message}`);
        return;
    }
    
    const content = `Nmap Scan Results for ${target}\nScan time: ${new Date()}\n${"=".repeat(50)}\n\n${stdout}`;
    
    fs.writeFile(outputFile, content, (err) => {
        if (err) console.log("[!] Save error");
        else console.log(`[+] Done! Results saved to ${outputFile}`);
    });
});