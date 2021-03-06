// const request = require('request')
// const url = "http://api.weatherstack.com/current?access_key=8984df3b2b0ad15d38f5b4c424f21603&query=New%20York"
// request({url: url}, (err, response)=>{
//     if(err){
//         console.log(err)
//     }else{            
//         const data = JSON.parse(response.body)
//         console.log(data['current'].temperature)
//         console.log(data['current'].precip)        


        
//     }
// })

/*
//Challenge
const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXRhbmdwYXJpIiwiYSI6ImNrYWlmdjM5MDAwY3Aycm81bHJjYzl6NXUifQ.yRmWohVG1A1mmBJ3zj33yg&limit=1"
request({url:url2},(err,response)=>{
    const data = JSON.parse(response.body)
    const locationArr=data['features'][0].center
    console.log(locationArr[0]+" "+locationArr[1])
})
*/

//Learn Callback Abstraction ------

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv[2]!=null){
    geocode(process.argv[2],(error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error);        
        }
        console.log('lat and lon: ',latitude,longitude)
        console.log('Location: ',location)
        console.log('Error: ',error)  
        forecast(longitude,latitude,(error,forecastData)=>{
            if(error){
                return console.log(error);
                
            }
            
            console.log('Forecast Data: ',forecastData)
            console.log('Error: ',error)
        })
    
    
    })
}else{
    console.log('Please enter a location')
}


//Challenge - utils/forecast.js

