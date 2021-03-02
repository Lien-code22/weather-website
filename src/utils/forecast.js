const request = require('request')

const forecast =(latitute,longtitude,callback)=>{
    const url ='http://api.weatherstack.com//current?access_key=0f3543efa0991be038bff4dad9b44f85&query='+ longtitude +','+ latitute + '&units=f'
    request ({url, json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
           
            callback(undefined,` As of today ${body.location.localtime},${body.current.weather_descriptions[0]} .It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}
module.exports =forecast