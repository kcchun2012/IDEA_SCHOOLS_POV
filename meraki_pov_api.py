
import requests
import json
from deepdiff import DeepDiff
import time
from collections import OrderedDict
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

#Reused Variables
#URL used to make API calls
API_KEY='<MERAKI_API_KEY'
URL = "https://dashboard.meraki.com/api/v0"


#Return the ID of the organization (should only have a single organization instance)
def getOrganizationID():
    getURL = URL + "/organizations"
    headers = {'X-Cisco-Meraki-API-Key': API_KEY}
    response = requests.request("GET", getURL, headers=headers)
    text = response.json()
    return text


#Return list of networks in organization
def getNetworks(orgID):
    getURL = URL +"/organizations/" + str(orgID) + "/networks"
    headers = {'X-Cisco-Meraki-API-Key': API_KEY}
    response = requests.get( getURL, headers=headers)
    text = response.json()
    return(text)

#Return list of devices in a networks
def getNetworkDevices(networkID,networkName):
    getURL = URL + "/networks/"+ str(networkID) +"/devices"
    headers = {'X-Cisco-Meraki-API-Key': API_KEY}
    response = requests.request("GET", getURL, headers=headers)
    text = response.json()
    return(text)

#Return LLDP and CDP information of device based on
#a timespan (in seconds) and must be less than a month -- LLDP and CDP info updated fully every 2 hours
def getConnectedDeviceInfo(networkId, serial, time):
    getURL = URL + "/networks/"+ str(networkId) + "/devices/" + str(serial) + "/lldp_cdp"
    querystring = {'timespan': time}
    headers = {'X-Cisco-Meraki-API-Key': API_KEY}
    response = requests.request("GET", getURL, headers=headers, params=querystring)
    text = response.json()
    return(text)

#Return devices from all networks
#Loop through list of networks and create a list of dictionaries
#with device id and another list of dictionaries with corresponding network data
#The 2 returned objects are utilized to preserve all pertinent data that will be
#combined into a single list of dictionaries for each device, with network data included
def getAllNetworkDevices(networks):
    networkDevices=[]
    networkData=[]
    count=0
    for n in networks:
        networkDevices.append(getNetworkDevices(n["id"],str(n['name'])))
        networkData.append({'networkName':str(n['name']), 'networkID':str(n['id'])})
    return(networkDevices,networkData)

#Return all connected device info for all devices in all networks
#Loops through network devices and gets lldp and cdp data for each device
#Also appends network information (name and ID) to the device data to display in table
#Takes in output from getAllNetworkDevices, runs through getConnectedDeviceInfo
def getAllNetworkDeviceInfo(networkDevices,networkData,time):
    devices=[]
    count=0
    for x in networkDevices:
        for y in x:
            deviceinfo=getConnectedDeviceInfo(networkData[count]['networkID'],y['serial'],str(time))
            if deviceinfo:
                devices.append({'serial':y['serial'], 'name':y['name'], 'network':networkData[count]['networkName'], 'networkId':networkData[count]['networkID'], "MAC":y['mac'], "port":deviceinfo['ports']})
        count = count + 1
    return devices

#Compare device port configurations between two different lists and return the differences
#Takes in list of dictionaries of all devices within an organization
#Nested for loops:
    #check serial in dev1 and see if the device is even in dev2
    #if the device is found, check if the ports match up.  If they don't append to errors
    #if the device is not found then also append to errors as this device was removed
    #dev2 may have an added device that is not in dev1, so run nested loop for dev2 against dev1 and append to errors if serial not found
def compare(dev1,dev2):
    found = 0
    error1 = []
    error2 = []
    for x in dev1:
        for z in dev2:
            if x['serial'] == z['serial']:
                found = 1
                if x['port'] != z['port']:
                    error1.append(x)
                    error2.append(z)
                break
        if found == 0:
            error1.append(x)
            error2.append({'networkId':'NA','name':'NA','MAC':'NA','serial':'NA','port':{'NA':'NA'},'network':x['network']})
        found = 0

    for x in dev2:
        for z in dev1:
            if x['serial'] == z['serial']:
                found = 1
                break
        if found == 0:
            error2.append(x)
            error1.append({'networkId':'NA','name':'NA','MAC':'NA','serial':'NA','port':{'NA':'NA'},'network':x['network']})
        found = 0

    return (error1,error2)

#Send an email with the body of email as input
#Utilizes the public google email server 'smtp.gmail.com' on port '587'
#Input desired source and destination email and the credentials to login to source email
def sendEmail(emailBody):
    fromaddr = "EMAIL_ADDRESS_FROM"
    toaddr = "EMAIL_ADDRESS_TO"
    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = "Network Changes"

    body = str(emailBody)
    msg.attach(MIMEText(body, 'html'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login("EMAIL_ADDRESS_FROM_USERNAME", "EMAIL_ADDRESS_FROM_PASSWORD")
    text = msg.as_string()
    server.sendmail(fromaddr, toaddr, text)
