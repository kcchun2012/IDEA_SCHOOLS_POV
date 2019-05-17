# This is the application which calls on functions defined in meraki_pov_api.py and interacts with html code to display and retrieve data

from flask import Flask, render_template, request
from meraki_pov_api import *
from device24 import *
#device24 just has preloaded device information for test purposes


#Save variables that are utilized often to reduce the number of calls needed per iteration
orgID = getOrganizationID()

#The organizatino ID for Meraki Sandbox is in position [1]
sandboxOrg = str(orgID[0]['id'])
#The networks within the organization should not change often
networks = getNetworks(sandboxOrg)
#The network devices within the organization should not change often
networkDevices, networkData = getAllNetworkDevices(networks)

app = Flask(__name__)

#Home screen for SP Meraki Portal
#Request all device information in organization for a given time period
#Time selected is must be defined in seconds, can be up to a month
@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        timeSelect = request.form['time']
        if timeSelect == '2 Hr':
            time = '7200'
        elif timeSelect == '4 Hr':
            time = '14400'
        elif timeSelect == '8 Hr':
            time = "28800"
        elif timeSelect =="24 Hr":
            time = '86400'
        elif timeSelect == "48 Hr":
            time = '172800'
        elif timeSelect == "1 Week":
            time = '604800'
        devices = getAllNetworkDeviceInfo(networkDevices, networkData, time)
        return render_template("viewDevices.html",devices=devices)
    return render_template("index.html")


@app.route('/viewDevices', methods=['GET','POST'])
def viewDevices():
    devices = getDevices();
    return render_template("viewDevices.html",devices = devices)


#Choose 2 different time periods to compare port configurations
#Also sends an email with device comparison
@app.route('/compareDevicesConnected', methods=['GET','POST'])
def compareDevicesConnected():
    if request.method == 'POST':
        select1 = str(request.form['time1'])
        select2 = str(request.form['time2'])
        if select1 == '2 Hr':
            time1 = '7200'
        elif select1 == '4 Hr':
            time1 = '14400'
        elif select1 == '8 Hr':
            time1 = "28800"
        elif select1 =="24 Hr":
            time1 = '86400'
        elif select1 == "48 Hr":
            time1 = '172800'

        if select2 == '2 Hr':
            time2 = '7200'
        elif select2 == '4 Hr':
            time2 = '14400'
        elif select2 == '8 Hr':
            time2 = "28800"
        elif select2 =="24 Hr":
            time2 = '86400'
        elif select2 == "48 Hr":
            time2 = '172800'
        elif select2 =="1 Week":
            time2 = '604800'
        elif select2 =="2 weeks":
            time2 ='1209600'

        device1 = getAllNetworkDeviceInfo(networkDevices, networkData, time1)
        device2 = getAllNetworkDeviceInfo(networkDevices, networkData, time2)
        error1, error2 = compare(device1,device2)
        x = render_template("output.html",error1=error1,error2=error2,time1=select1,time2=select2)
        #this is where email is created to send final html code
        sendEmail(x)
        return x
    return render_template("compareDevicesConnected.html")



if __name__ == "__main__":
    # app.run(host='0.0.0.0', port=80)
    app.debug=True
    app.run()
