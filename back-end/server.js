const app = require('./app');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./src/controllers/userController');

const port = (process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', userController.create);

app.listen(port, () => console.log(`Server started on port ${port}!`));
