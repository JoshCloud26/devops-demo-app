FROM python:3.11-slim

WORKDIR /opt/metrics

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY collector.py .

CMD ["python", "collector.py"]
