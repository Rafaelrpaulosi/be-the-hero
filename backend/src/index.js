const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();
/**
 * usar para ele conseguir ler JSON */
app.use(express.json());

app.use(cors());
app.use(routes);

app.listen(3333)