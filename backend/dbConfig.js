const mongoose = require('mongoose');

const dbConnect=async()=>{
    try {
        const connection = await mongoose.connect(process.env.DB_CONNECTION);
        console.log(
            `Connected to MongoDB at ${connection.connection.host} on database '${connection.connection.name}'`
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=dbConnect;