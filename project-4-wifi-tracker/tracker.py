import socket
import datetime

print("=== WiFi Site Tracker ===")
print("Logging DNS requests to visited_sites.txt")
print("Press Ctrl+C to stop\n")

def log_site(domain):
    with open("visited_sites.txt", "a") as f:
        f.write(f"{datetime.datetime.now()} - {domain}\n")
    print(f"[{datetime.datetime.now().strftime('%H:%M:%S')}] {domain}")

# Demo mode - shows how it works
demo_sites = ["google.com", "facebook.com", "youtube.com", "github.com"]

print("Demo mode - Tracking these sites:")
for site in demo_sites:
    log_site(site)

print("\n✅ Demo complete!")
print("File saved: visited_sites.txt")