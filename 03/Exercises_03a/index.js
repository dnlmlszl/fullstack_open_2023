require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const connectDB = require('./db/connect');
const errorHandlingMiddleware = require('./middleware/errorHandler');

const morgan = require('morgan');

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

// let persons = require('./data.json');

app.use(cors());
app.use(express.json());

app.get('/api/v1/info', (req, res) => {
  const time = new Date();
  const phonebookLength = persons.length;
  res.send(
    `<p>Phonebook has info for ${phonebookLength} people</p><p>${time}</p>`
  );
});

// Just in development
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

// function generateId() {
//   const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
//   return maxId + 1;
// }

const personRouter = require('./routes/personRouter');

app.use('/api/v1/persons', personRouter);
app.use(errorHandlingMiddleware);

app.use(unknownEndpoint);

const PORT = process.env.PORT || 5050;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
