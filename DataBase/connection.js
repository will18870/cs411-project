const {MongoClient} = require('mongodb');
const myMap = {};
myMap["Albert"] = [["JID New York", "Drake New York"]];
myMap["Will"] = ["Uzi", "21 savage"];

const testMap = {};
testMap["Albert"] = [{"genre": "Rosadk", "artist": "Queensdads"},{"genre": "Rap", "artist": "Jcole"} ]
console.log(testMap["Albert"][0]);
const arr = Object.entries(testMap["Albert"][0])
console.log(arr);

async function main(){
    const uri = "mongodb+srv://acheng1:123albert123cheng@cluster0.bpmkkw8.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);

        /*await storeUsers(client, {
            name: "Albert",
            concert: testMap["Albert"]
        });*/

    } catch (e) {
        console.error(e)

    } finally {
        await client.close();
    }



const { addConcertToUser } = require('./add_concert_function');
// example manually calling add_concert_function test
addConcertToUser('Albert', { genre: 'Pop', artist: 'Harry' });


const { deleteConcertFromUser } = require('./delete_concert_function');
// example manually calling delete_concert_function test
deleteConcertFromUser('Albert', 'Queen');

}
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 


async function storeUsers(client,newListing){
   const result = await client.db("Users").collection("Users_Concert").insertOne(newListing);
   console.log(`new listing created: ${result.insertedID}`);
}


//console.log(myMap["Albert"]);
//console.log(testMap["Albert"]);