const { MongoClient } = require('mongodb');

async function deleteConcertFromUser(name, artist) {
    const uri =
      "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const userCollection = client.db("Users").collection("Users_Concert");
  
      // Find the user's concert array by name
      const user = await userCollection.findOne({ name: name });
      const concertArray = user.concert;
  
      // Find the index of the concert object with the specified artist
      const index = concertArray.findIndex(
        (concert) => concert.artist === artist
      );
  
      // If the concert object is found, remove it from the array and update the user document
      if (index >= 0) {
        concertArray.splice(index, 1);
        await userCollection.updateOne(
          { name: name },
          { $set: { concert: concertArray } }
        );
        console.log(`Deleted concert by ${artist} from ${name}`);
      } else {
        console.log(`No concert by ${artist} found for ${name}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
}
 
module.exports = { deleteConcertFromUser };
  