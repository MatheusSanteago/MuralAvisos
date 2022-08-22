const express = require('express'); // Sempre instale antes.
const PORT = 3000;
const apiRoute = require('./routes/api');

const path = require('path');
const app = express();


app.use('/', express.static(path.join(__dirname, "public")));
app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log('Server Running on Port', PORT);
});

