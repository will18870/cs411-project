const { MongoClient } = require('mongodb');

async function getConcertTitlesByUserName(userName) {
    const uri = "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
  
    function getConcertTitlesByUserName(userName) {
        const userConcerts = testMap[userName];
        const concertTitles = [];
      
        for (let i = 0; i < userConcerts.length; i++) {
          const concert = userConcerts[i];
          concertTitles.push(concert.title);
        }
      
        return concertTitles;
      }
    }      

module.exports = { getConcertTitlesByUserName };
  