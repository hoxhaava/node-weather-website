const request = require('postman-request')

const geocode = (address, callback) => {
    const url = process.env.POSITION_STACK_URL + encodeURIComponent(address) + '&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.data.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}


module.exports = geocode
