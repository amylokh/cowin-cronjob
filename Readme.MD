# Cowin Cron Job

A cron job which runs every minute to check if there are any free vaccine slots available & notifies you on email when free slots are available

---

## Note

Currently this service works only for my District - Amravati. You can make it work for your district by updating it with your district number

---
## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

---
## Install dependencies

    $ npm install

---
## Configure app

Open `.aws/credentials` file & check if you have got the right access key & secret key to use the AWS SES which will send the email notification. You will need:

- AWS access_key & secret_key & credentials;
- Your own verified emails in AWS SES so that the emails can be sent;

## Steps to run the project

 - Update the district number according to your need in cowinService.js
 - Update the source email & to email according to your need in notificationService.js
 - Then just run `npm start`

---
## TO DO
- This project needs a lot of refactoring
- Need to make the districts dynamic
- Need to convert the email in some sort of function params
- Make error-proof
- Send the complete details of vaccination center in the email
- Implement loggers
- Any other improvements

---
### Node
Please try to use node v14.15.1

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.1

    $ npm --version
    6.14.8
