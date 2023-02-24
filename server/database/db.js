import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const Connection = async () => {
    const URL = process.env.DATABASE
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("db connected")
    }
    catch (error) {
        console.log("error in db", error);
    }
}
export default Connection