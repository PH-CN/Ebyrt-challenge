const app = require('./app');
const express = require('express');
const cors = require('cors');
const userController = require('./src/controllers/userController');

const port = (process.env.PORT || 3333);

app.use(express.json());
app.use(cors());

app.get('/users', userController.findAll);

app.post('/register', userController.create);

app.listen(port, () => console.log(`Server started on port ${port}!`));
