const express = require('express');
const app = express();
const request = require('request')
const port = 3001;
const path = require("path");
const bodyParser = require('body-parser')

app.use(bodyParser())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
 });

 const tmKey = '0txRTCElnYysjp6wGw85pTQwcXUPIXfv';

 app.post('/result', (req, res) => {


     const zip = req.body.zip
     request('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=' + zip + '&apikey=' + tmKey, function (error, response, body) {
         if (!error && response.statusCode == 200) {
             info = JSON.parse(body)
             console.log(info)
             if (info.page.totalElements == 0)
             {
                 res.send('no concerts at this zip code :(')
                 return
             }
             eventList = info._embedded.events
             console.log(info)
             //res.send(info._embedded.events)

             result = ""
             for(let i = 0; i < eventList.length; i++) {
                 result += eventList[i].name + "<br>";
             }

             res.send(result)
         }
         else {
             res.send('Error: Request did not go through :(')
         }
     })

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
