// 1 require mongoose
const mongoose=require('mongoose');

// 2 create DB
const connectDB=async() => {
    try {
        // step 1
        await mongoose.connect ( "mongodb+srv://lena:mongoose@cluster0.b9obc.mongodb.net/")
           
        
        //step 2
        console.log("database connected ..")
    } catch (error) {
        console.log("can not connect !!",error)
    }
};
module.exports=connectDB