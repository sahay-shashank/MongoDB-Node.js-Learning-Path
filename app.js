const { MongoClient } = require("mongodb");
const atlas_uri = require("./atlas_uri");

const dbName = "testing"
const client = new MongoClient(atlas_uri)

const connectDatabase = async () => {
    try {
        await client.connect()
        console.log(`connected to the ${dbName} database`)
    } catch (e) {
        console.log(`error connecting to the ${dbName} database: ${e}`)
    }
}

const main = async () => {
    try {
        await connectDatabase()
    } catch (e) {
        console.log(`error connecting to the ${dbName} database: ${e}`)
    }
    finally {
        await client.close()
    }
}

main()