const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const port = 3001;
const bodyParser = require('body-parser');

app.use(cors());
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log('Server is running');
})