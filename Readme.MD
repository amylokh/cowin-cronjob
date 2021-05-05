# Cowin Cron Job

A cron job which runs every minute to check if there are any free vaccine slots available & if there are, then notifies you on email

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
Please try to use node v14.15.1

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.15.1

    $ npm --version
    6.14.8

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Install dependencies

    $ npm install

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd cowin-cronjob
    $ npm install

## Configure app

Open `.aws/credentials` file & check if you have got the right access key & secret key to use the AWS SES. You will need:

- AWS settings & credentials;
- Your own verified emails in AWS SES;

## Running the project

    $ npm start

## TO DO
- This project needs a lot of refactoring
- Need to make the districts dynamic
- Need to convert the email in some sort of function params
- Make error-proof
- Send the complete details of vaccination center in the email
