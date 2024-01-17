const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'process.env.WEATHER_STACK_URL + encodeURIComponent(lat) + ', ' + encodeURIComponent(long)
    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try again.', undefined)
        } else {
            console.log(body.current)
            callback(undefined, 
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%."
            )
        }
    })
}

module.exports = forecast
