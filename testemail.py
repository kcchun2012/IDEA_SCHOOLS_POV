
import smtplib

from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
from app import *

fromaddr = ""
toaddr = ""
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "Python email"

body = "Python test mail part 2"
html = testing()
msg.attach(MIMEText(html, 'html'))

server = smtplib.SMTP('smtp.gmail.com', 587)
server.ehlo()
server.starttls()
server.ehlo()
server.login("", "")
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
