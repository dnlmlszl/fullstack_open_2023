const express = require('express');
const app = express();

const morgan = require('morgan');
let persons = require('./data.json');

app.use(express.json());
// Just in development
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

function generateId() {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
}

app.get('/api/v1/persons', (req, res) => {
  res.json(persons);
});

app.post('/api/v1/persons', (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'Please provide name and number' });
  }

  const isNameExist = persons.some((person) => person.name === body.name);

  if (isNameExist) {
    return res.status(400).json({ error: 'Name has to be unique' });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  res.json(person);
});

app.get('/api/v1/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((prs) => prs.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/v1/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.get('/api/v1/info', (req, res) => {
  const time = new Date();
  const phonebookLength = persons.length;
  res.send(
    `<p>Phonebook has info for ${phonebookLength} people</p><p>${time}</p>`
  );
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
