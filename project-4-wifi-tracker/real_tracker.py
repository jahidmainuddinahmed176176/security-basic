from scapy.all import sniff, DNS, DNSQR
import datetime

print("=== REAL WiFi Site Tracker ===")
print("Capturing DNS queries (sites you visit)")
print("Press Ctrl+C to stop\n")

def log_dns(packet):
    if packet.haslayer(DNS) and packet.getlayer(DNS).qr == 0:
        try:
            domain = packet.getlayer(DNSQR).qname.decode('utf-8').rstrip('.')
            timestamp = datetime.datetime.now()
            with open("real_visited_sites.txt", "a") as f:
                f.write(f"{timestamp} - {domain}\n")
            print(f"[{timestamp.strftime('%H:%M:%S')}] {domain}")
        except:
            pass

print("Listening for DNS queries...")
sniff(filter="udp port 53", prn=log_dns, store=0)