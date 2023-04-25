// add_concert_function.js
const { MongoClient } = require('mongodb');

async function addConcertToUser(name, concert) {
  const uri = "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const result = await client.db("Users").collection("Users_Concert").updateOne(
      { name },
      { $addToSet: { concert } } //here addToSet only adds the concert to the array if it isn't there already
    );
    console.log(`${result.modifiedCount} document(s) updated.`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { addConcertToUser };
