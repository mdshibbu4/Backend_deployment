const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require("mongoose")
 

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to  db ");
    })
}
module.exports = connectToDB