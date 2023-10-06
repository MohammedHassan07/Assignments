const getUsersData = (req, res) => {

    const connection = req.connection
    const query = `SELECT * FROM Users`

    connection.query(query, (error, result) => {

        if (error) console.log(error.messsage)
        else {

            console.log(result)
            res.render('index', { result })
        }
    })
}

module.exports = {

    getUsersData
}