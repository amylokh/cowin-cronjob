const axios = require('axios');

const getVaccineDetails = () => {
    //fetching today
    const dateTime = new Date();
    const currDate = dateTime.getDate();
    currDate.length == 1? currDate = '0'+ currDate : currDate
    const currMonth = dateTime.getMonth() + 1;
    const currYear = dateTime.getFullYear();
    const fullDate = currDate + "-" + currMonth + "-" + currYear

    const headers = {
        'Content-Type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
      };
    const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=366&date=' + fullDate

    return axios.get(url, {headers})
      .then(response => response.data.centers)
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

exports.getVaccineDetails = getVaccineDetails;