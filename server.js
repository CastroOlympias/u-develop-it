const express = require('express');
const mysql = require('mysql2');

const PORT = process.allowedNodeEnvironmentFlags.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1=Brown+Soda',
        database: 'election'
    },
    console.log('Connected to the election database.')
)


db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})


// Default (catchall) response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});