const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send(`
      <form action="/search" method="get">
        <input type="text" name="location" placeholder="Enter location">
        <button type="submit">Search</button>
      </form>
    `);
 });

app.get('/search', (req, res) => {
  const location = req.query.location;
  
  // call to the Discovery API with the specified location
  const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?city=${location}&apikey=pErWT0IpRWEX7HMp3QIvW6bVjjUgbKXT`;
  
  // axios for making HTTP requests 
   const axios = require('axios');
   axios.get(apiUrl)
     .then(response => {
       const concerts = response.data.events;
       // Render the concert results to the user
       res.send(`
         <h2>Concerts in ${location}</h2>
         <ul>
           ${concerts.map(concert => `<li>${concert.name}</li>`).join('')}
         </ul>
       `);
     })
     .catch(error => {
       console.error(error);
       res.send('Error occurred');
     });

 
  
  // For now, sending a placeholder response
  res.send(`Search results for ${location}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${3001}/`);
});
