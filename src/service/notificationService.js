var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

var credentials = new AWS.SharedIniFileCredentials({profile: 'personal-account'});
AWS.config.credentials = credentials;

const notifyMe = (phoneNo, email, data)=> {
    var params = {
        Destination: { /* required */
          ToAddresses: [
            email,
            /* more items */
          ]
        },
        Message: { /* required */
          Body: { /* required */
            Html: {
             Charset: "UTF-8",
             Data: "Vaccine available"
            },
            Text: {
             Charset: "UTF-8",
             Data: "Vaccine available"
            }
           },
           Subject: {
            Charset: 'UTF-8',
            Data: 'Vaccine available'
           }
          },
        Source: 'amylokh@outlook.com' /* required */
      };
      
      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
      console.log('Sending notification email')
      // Handle promise's fulfilled/rejected states
      sendPromise.then(
        function(data) {
          console.log('Vaccine available. Notified on email successfully');
          console.log(data.MessageId);
        }).catch(
          function(err) {
          console.error(err, err.stack);
        });
}

exports.notifyMe = notifyMe;