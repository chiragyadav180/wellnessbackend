const mongoose=require('mongoose');

const connectDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connected");

    }catch(err){
        console.log('DB connection failed',err);
        process.exit(1);
    }
};

module.exports=connectDB