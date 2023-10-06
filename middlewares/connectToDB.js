const mysql = require('mysql')

const connectToDB = (req, res, next) => {

    // const host = process.env.host
    // const user = process.env.user
    // const password = ''
    // const database = process.env.database
    const host = 'localhost'
    const user = 'root'
    const password = ''
    const database = 'assignments'

    const conn = mysql.createConnection({

        host: host,
        user: user,
        password: password,
        database: database
    })
    
    conn.connect((err) => {

        if (err) console.log(err.message)
        else {

            req.connection = conn
            next()
        }
    })
}

module.exports = connectToDB