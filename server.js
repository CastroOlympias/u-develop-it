const express = require('express');

const PORT = process.allowedNodeEnvironmentFlags.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});


// Default response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});