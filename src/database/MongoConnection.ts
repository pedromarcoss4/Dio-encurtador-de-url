import { connect } from "http2"
import mongoose from "mongoose"
import { config } from "process"

export MongoConnection{
    public async connect(): Promise  <void>{
        try{
            await mongoose.connect(config.MONGO_CONNECTION, {useNameUrlParser: true, useUnifiedTopology:true})
            console.log('database conectada')
        }catch(err)
        console.error(err.message);
        process.exist(1)
        

    }
}