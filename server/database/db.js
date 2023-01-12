import mongoose from 'mongoose'
const Connection = async (username = 'purnima', password = 'reactpurnima') => {
    const URL = `mongodb://purnima:${password}@ac-nyt8v8v-shard-00-00.merrczh.mongodb.net:27017,ac-nyt8v8v-shard-00-01.merrczh.mongodb.net:27017,ac-nyt8v8v-shard-00-02.merrczh.mongodb.net:27017/?ssl=true&replicaSet=atlas-h0aph0-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("db connected")
    }
    catch (error) {
        console.log("error in db", error);
    }
}
export default Connection