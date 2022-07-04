const app = require('./app');
const userController = require('./src/controllers/userController');

const port = (process.env.PORT || 3000);

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', userController.create);

app.listen(port, () => console.log(`Server started on port ${port}!`));