const request = require('request');
const key = 'f352fba88efc2146d20d96c0391edd8f';

const forcast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. The high today is ' + body.daily.data[0].temperatureHigh +
            ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.');  
        }
    });
};

module.exports = forcast;