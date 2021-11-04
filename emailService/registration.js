require('dotenv').config();
const db = require("../dbs")
const nodemailer=require('nodemailer');

module.exports=async()=>{
    const items = await (await db.query("SELECT * FROM Tasks where issent = 0")).recordset
     for(let item of items){
         console.log(item.email)
         


         let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              user:process.env.email,
              pass: process.env.password
            }
          });
          
          let mailOptions = {
            from:process.env.email,
            to: `${item.email}`,
            subject: 'A test',
            html:
            `<div style="backgroundColor:gray  color:white"> <h1 style="color:red">
            Test Mail </h1> <br/><br/><p>Hello ${item.names} </p><br/><br/><br/> <br/>
            <img src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062__480.png"> </div>` ,
            text: 'That was easy!',
        
        //     attachments: [{   
        //       filename: 'first.txt',
        //       content:'Meeting: Interns Meeting Time: 100:00Pm Topic:Redux Guest : Jonathan Ndambuki' 
        //   }]
        
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
               db.query(
                    `UPDATE Tasks set issent = 1 where id = ${item.id} `
                  );

              console.log('Email sent: ' + info.response);
            }
          });  

     }

     
     
}