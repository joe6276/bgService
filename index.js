const config = require('./config/db')
const express= require('express')
const mssql= require('mssql')
const app= express();
const user=require('./user')
const regTask  = require('./emailService/registration')

const cron = require('node-cron');
const run = async()=>{
  cron.schedule('*/10 * * * * *', async() => {
    console.log("running")
    await regTask()
 
  });
}

run()



mssql.connect(config).then(pool=>{
  if(pool.connecting){
    console.log("Connecting to the Database")
  }  
})





const PORT = 8000
app.listen(PORT, () =>console.log(`Service running on port ${PORT}`))