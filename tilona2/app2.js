const https = require('https')
var object = {
    hostname : "api.api-ninjas.com",
    path :"/v1/facts?limit=1",
    method:"GET",
    headers:{
        'X-Api-Key': "zMCSFBKtWrW192TWBGAVUryKOMC0WtbkR8A4ML00"

    }}

    https.get(object , (response)=>{
        response.on("data");
       
    })