import mongoose from "mongoose";

// main().catch((err) => console.log(err));

async function connectMongo(){
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ticketer');
        console.log(`DB connected ${conn.connection.host}`)
    }

    catch(err){console.log(err)};
}

export default connectMongo;