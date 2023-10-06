const admin = (req, res) => {

    res.render('admin')
}


// insert data
const insertData = (req, res) => {

    const connection = req.connection
    const { name, email, age, dob } = req.body
    console.log(req.body)
    
    const query = `INSERT INTO users (name, email, age, dob) VALUES ("${name}", "${email}", "${age}", "${dob}")`

    connection.query(query, (error, result) => {

        if (error) console.log(error.message)
        else {

            console.log(result)
            res.status(200).json({ message: 'success' })
        }
    })
}

module.exports = {

    admin, insertData
}