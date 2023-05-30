const { MongoClient, ObjectId } = require('mongodb');

class DB {
    db_uri;
    db_name;
    client;

    constructor() {
        this.db_uri = "mongodb+srv://shenkar:Uo69hoxvYWtLcrzP@starwarscluster.ecot1ba.mongodb.net/?retryWrites=true&w=majority"; 
        this.db_name = "store";
        this.client = new MongoClient(this.db_uri);
    }

    async FindAll(collection, query = {}, project = {}) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).find(query, project).toArray();
        } catch (error) {
            throw error;
        }
        finally {
            await this.client.close();
        }
    }



}

module.exports = DB;
