var _ = require('lodash');

const checkIfSlotsAreAvailable = (centersData) => {
    // console.log(centersData)
    let isAvailable = false;
    centersData.forEach((center) => {
        const { name, address, pincode, sessions } = center;
        sessions.forEach((session)=> {
            if (session.available_capacity>0 && session.min_age_limit==18) {
                console.log('Found a free slot at Name: '+ name + 
                ' Pincode: '+ pincode + ' Address: ' + address)
                isAvailable = true;
            }
        })
    })
    return isAvailable;
};

exports.checkIfSlotsAreAvailable = checkIfSlotsAreAvailable;