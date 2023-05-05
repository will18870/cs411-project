import express from "express";
import path from "path";
import fs from "fs";
import request from "request";
import bodyParser from "body-parser"
const app = express();

import MongoClient from "mongodb";

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import cors from "cors";
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

import { fileURLToPath } from 'node:url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const tmKey = '0txRTCElnYysjp6wGw85pTQwcXUPIXfv';


const client_id = '8368d220a5bd459db1f24d384a859cf7';
const client_secret = '31cd2b87af204c0b93bff5a0771719c8';
const redirect_uri = 'http://localhost:5000/Login';


app.get('/getConcerts*', (req, res) => {
    let term = req.query.keyword
    request('https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&keyword=' + term + '&size=20&apikey=' + tmKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let info = JSON.parse(body)
            // console.log(info)
            if (info.page.totalElements == 0) {
                const empty = "{ \"_embedded\":{ \"events\":[] } }"
                res.json(JSON.parse(empty)._embedded.events)
                return
            }

            let concerts = "{ \"_embedded\":{ \"events\":["
            let prev = ""
            let count = 0
            for (let i = 0; i < info._embedded.events.length; i++) {
                if (info._embedded.events[i].name == prev)
                    continue
                if (count >= 5)
                    break

                if (i != 0) {concerts += ","}
                count++
                // console.log(info._embedded.events[i])
                prev = info._embedded.events[i].name
                concerts += JSON.stringify(info._embedded.events[i])
            }
            concerts += "] } }"
            concerts = JSON.parse(concerts)
            // console.log(info)
            res.json(concerts)
            console.log("getting concerts...")
            return
        }
        const empty = "{ \"_embedded\":{ \"events\":[] } }"
        res.json(JSON.parse(empty))
    })

    console.log("getting concerts...")

})

app.get('/getId*', (req, res) => {
    console.log("getting id...")
    let token = req.query.token
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    request('https://api.spotify.com/v1/me', options, function (error, response, body) {
        if (!error) {
            res.json(body)
            console.log(body)
        } else {
            res.json({})
        }
    })

})
app.get('/getTopArtists*', (req, res) => {
    let token = req.query.token
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let artists = ' { "artists":['
    request('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10', options, function (error, response, body) {
        if (!error) {
            let info = JSON.parse(body)
            // console.log(info.items)
            // res.json(info)
            if(info === undefined) {
                artists += '] }'
                JSON.parse(artists)
                res.json(artists)
                return
            }

            for (let i = 0; i < info.items.length; i++) {

                if (i > 0) {artists += ","}
                artists += '{ "artist":"' + info.items[i].name + '"}'

            }

            artists += '] }'
            JSON.parse(artists)
            console.log(artists)
            res.json(artists)

        } else {
            console.log("error!")
            artists += '] }'
            JSON.parse(artists)
            res.json(artists)
        }
    })
    console.log("getting top artists...")
})

app.get('/getTopGenres*', (req, res) => {
    let token = req.query.token
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    let genres = ' { "genres":['
    request('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10', options, function (error, response, body) {
        if (!error) {
            let info = JSON.parse(body)
            // console.log(info.items)
            // res.json(info)
            if(info === undefined) {
                genres += '] }'
                JSON.parse(genres)
                res.json(genres)
                return
            }

            let dupelist = ["test"]
            for (let i = 0; i < info.items.length; i++) {

                for (let j = 0; j < info.items[i].genres.length; j++) {
                    if (!dupelist.includes(info.items[i].genres[j])) {
                        genres += '{ "genre":"' + info.items[i].genres[j] + '"},'
                        dupelist.push(info.items[i].genres[j])
                    }
                }

            }

            genres = genres.slice(0, genres.length - 1) + '] }'
            JSON.parse(genres)
            console.log(genres)
            res.json(genres)

        } else {
            console.log("error!")
            genres += '] }'
            JSON.parse(genres)
            res.json(genres)
        }
    })
    console.log("getting top genres...")
})


// db helper methods
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

async function deleteConcertFromUser(name, title) {
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
            (concert) => concert.title === title
        );

        // If the concert object is found, remove it from the array and update the user document
        if (index >= 0) {
            concertArray.splice(index, 1);
            await userCollection.updateOne(
                { name: name },
                { $set: { concert: concertArray } }
            );
            console.log(`Deleted concert by ${title} from ${name}`);
        } else {
            console.log(`No concert by ${title} found for ${name}`);
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

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


const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});