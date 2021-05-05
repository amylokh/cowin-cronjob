const axios = require('axios');

const getVaccineDetails = () => {

    const headers = {
        'Content-Type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
      };
    const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=366&date=05-05-2021'

    return axios.get(url, {headers})
      .then(response => response.data.centers)
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

exports.getVaccineDetails = getVaccineDetails;