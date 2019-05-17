FROM python:2.7-slim

ADD . /app
WORKDIR /app

RUN pip install Flask
RUN pip install requests

EXPOSE 80
ENV NAME meraki
ENTRYPOINT ["python", "./app.py"]
