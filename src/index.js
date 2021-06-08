const express = require ('express');
const categoryController = require('./controllers/categoryController');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello World')
});

app.get('/categories', categoryController.index);

app.listen(3333, () => console.log("App running on port 3333"));