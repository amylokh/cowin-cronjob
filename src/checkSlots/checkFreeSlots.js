var _ = require('lodash');

const checkIfSlotsAreAvailable = (centersData) => {
    // console.log(centersData)
    centersData.forEach((center) => {
        const { name, address, pincode, sessions } = center;
        sessions.forEach((session)=> {
            if (session.available_capacity>0 && session.min_age_limit==45) {
                console.log('Found a free slot at Name: '+ name + 
                ' Pincode: '+ pincode + ' Address: ' + address)
                return true;
            }
        })
    })
    return false;
};

exports.checkIfSlotsAreAvailable = checkIfSlotsAreAvailable;