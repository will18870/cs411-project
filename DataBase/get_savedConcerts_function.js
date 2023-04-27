const { MongoClient } = require('mongodb');

async function getConcertTitlesByUserName(userName) {
  const uri = "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);



  try {
    await client.connect();
    const database = client.db("Users");
    const collection = database.collection("Users_Concert");

    const userConcerts = await collection.findOne({ name: userName });

    if (userConcerts && userConcerts.concert) {
      const concertTitles = userConcerts.concert.map(concert => concert.title);
      return concertTitles;
    }

    return [];
  } catch (e) {
    console.error(e);
    return [];
  } finally {
    await client.close();
  }
}

module.exports = { getConcertTitlesByUserName };
