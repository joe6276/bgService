const db= require('./config/db')
const sql= require('mssql')

async function getUsers(){
    try {
        let pool= await sql.connect(db)
        let user= await pool.request().query('select * FROM Tasks')
        return user.recordset

    } catch (error) {
        console.log(error.message)
        
    }
}

module.exports= {getUsers:getUsers}
