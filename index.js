const cron = require('node-cron');
const express = require('express');
const cowinService = require('./src/service/cowinService');
const notificationService = require('./src/service/notificationService');
const checkFreeSlots = require('./src/checkSlots/checkFreeSlots');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

// cron job which runs every minute to check if the vaccine is available
cron.schedule('* * * * *', function() {
    console.log('Fetching vaccination center details...');
    cowinService.getVaccineDetails()
        .then((centersData)=> {
            if (checkFreeSlots.checkIfSlotsAreAvailable(centersData)) {
                notificationService.notifyMe('myPhoneNo', 'amylokh@gmail.com', 'TODO: vaccination center details');
                console.log('Found free slot');
            }
            else {
                console.log('No free slots available anywhere');
            }
        })
  });

app.listen(3000);
