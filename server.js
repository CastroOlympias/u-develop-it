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

// // Query for full list of candidates
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// // Query for a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
})

// // Delete a condidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
})

// Create a condidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log(results);
});


// Default (catchall) response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});