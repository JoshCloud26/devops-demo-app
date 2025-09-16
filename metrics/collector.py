import time
import requests

APP_URL = "http://devops-demo-app:3000"  # service name from docker-compose

while True:
    try:
        r = requests.get(APP_URL)
        print(f"[METRICS] {time.strftime('%Y-%m-%d %H:%M:%S')} - Status {r.status_code}")
    except Exception as e:
        print(f"[METRICS] {time.strftime('%Y-%m-%d %H:%M:%S')} - Error: {e}")
    time.sleep(5)  # wait 5s before checking again
