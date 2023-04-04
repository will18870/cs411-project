const express = require('express');
const app = express();
const request = require('request')
const port = 3001;

app.get('/', (req, res) => {
    res.send(`
      <form action="/result" method="get">
        <input type="text" name="location" placeholder="Enter location">
        <button type="submit">Search</button>
      </form>
    `);
 });

 const tmKey = '0txRTCElnYysjp6wGw85pTQwcXUPIXfv';

 app.get('/result', (req, res) => {
     request('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=02215&apikey=0txRTCElnYysjp6wGw85pTQwcXUPIXfv', function (error, response, body) {
         if (!error && response.statusCode == 200) {
             info = JSON.parse(body)
             eventList = info._embedded.events
             console.log(info)
             //res.send(info._embedded.events)
 
             result = ""
             for(let i = 0; i < eventList.length; i++) {
                 result += eventList[i].name + "\n";
             }
 
             res.send(result)
         }
         else {
             res.send('Hello World - google not work :(')
         }
     })

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
