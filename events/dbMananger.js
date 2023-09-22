require('dotenv').config();

const Console = require('../objects/console.js');
const { MongoClient, ObjectId } = require('mongodb');
const dbClient = new MongoClient(process.env.DATABASE_URL);

async function connect() {
    await dbClient.connect();
    Console.sendMessage('INFO', 'Connected to the database.');
}

async function getUser(usr) {
    const db = dbClient.db('user'); const collection = db.collection('users');

    try {
        if(!usr) {
            const getAllUsers = await collection.find({}).toArray();
            return getAllUsers;
        }

        const getUserByName = await collection.find({ username: usr }).toArray();
        if (getUserByName.length !== 0) return getUserByName[0];

        const getUserById = await collection.find({ _id: new ObjectId(usr) }).toArray();
        if (getUserById.length !== 0) return filteredDocs[0];
    } catch (error) {
        // Console.sendMessage('ERROR', error);
        return null;
    }
}


module.exports = {
    connect,
    getUser,
}