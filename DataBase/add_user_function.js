const { MongoClient } = require('mongodb');

async function addUser(name) {
  const uri = "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    
    const userCollection = client.db("Users").collection("Users_Concert");
    
    // Check if the user already exists
    const existingUser = await userCollection.findOne({ name });
    if (existingUser) {
      console.log(`User ${name} already exists.`);
      return;
    }
    
    // Create a new user object
    const newUser = {
      name,
      concerts: []
    };
    
    // Insert the new user into the collection
    const result = await userCollection.insertOne(newUser);
    console.log(`New user ${name} added with ID: ${result.insertedId}`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { addUser };
