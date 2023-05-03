const { MongoClient } = require('mongodb');

const testMap = {};

testMap["albert"] = [
  {
    "id": 1,
    "title": "Concert 1",
    "image": "1.jpg",
    "date": "2023-05-01",
    "location": "Boston",
    "ticketLink": "https://example.com/tickets/1",
    "description": "This is the description of Concert 1.",
    "genre": "Pop"
  },
  {
    "id": 2,
    "title": "Concert 2",
    "image": "2.jpg",
    "date": "2023-06-01",
    "location": "New York",
    "ticketLink": "https://example.com/tickets/2",
    "description": "This is the description of Concert 2.",
    "genre": "Rock"
  }
];

async function main() {
  const uri = "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);


    //...

    // Add a concert for a user
    const { addConcertToUser } = require('./add_concert_function');
    // example manually calling add_concert_function test
    await addConcertToUser('albert', {
      id: 2,
      title: "Concert 1",
      image: "3.jpg",
      date: "2024-09-01",
      location: "Boston",
      ticketLink: "https://example.com/tickets/3",
      description: "This is the description of Concert 3.",
      genre: "Rock",
      price: "50"
    });

    // Delete a concert from a user
    const { deleteConcertFromUser } = require('./delete_concert_function');
    // example manually calling delete_concert_function test
    deleteConcertFromUser('albert', 'Concert 3');

    // Retrieve user's saved concerts given the user key 'name'
    const { getConcertTitlesByUserName } = require('./get_savedConcerts_function.js');
    const concertTitles = await getConcertTitlesByUserName('albert');
    console.log(concertTitles);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}


// creating a new user in the database
const { addUser } = require('./add_user_function');

// Call the addUser function with the desired user name
addUser('William');



async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function storeUsers(client, newListing) {
  const result = await client.db("Users").collection("Users_Concert").insertOne(newListing);
  console.log(`new listing created: ${result.insertedID}`);
}

main().catch(console.error);
