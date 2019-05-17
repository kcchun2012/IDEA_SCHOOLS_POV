
Idea Public Schools Meraki PoC

This demo is utilizing the Meraki Sandbox

This is a proof of concept created for Idea Public Schools.  This code is intended to showcase the value that Meraki APIs can bring to business/IT.
The application can populate all devices and port connections throughout an entire Meraki Organization.
The application can also pull all device information from two different time periods and display the changes between the two port connections to distinguish which device ports have been tampered with.
The application can also send an email with these device port changes.
More Meraki API documentation can be found here: https://documenter.getpostman.com/view/897512/meraki-dashboard-api/2To9xm

- Make sure Python is installed
- Make sure pip is installed
  - https://pip.pypa.io/en/stable/installing/ for information on pip
- Enter 'pip install -r requirements.txt' into command line to download necessary libraries
- In 'meraki_pov_api.py' scroll to the 'def sendEmail(emailBody)'' and fill out the 'from address', 'to address', and the login credentials
  - The sendEmail(x) is called in app.py under the 'def compareDevicesConnected()'
  - remove/comment this out if email not desired
- In meraki_pov_api.py add your API_KEY
- In app.py make sure the oranizationID corresponds to the appropriate Meraki organzation

- To run application enter 'python app.py' into command line
- Navigate to IP Address displayed using an internet browser
- Navigating to https://(IP Address)/testing will bring up the pre-loaded comparison configuration table
