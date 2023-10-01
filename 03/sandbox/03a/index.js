const express = require('express');
const app = express();

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(express.json());
app.use(requestLogger);

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];

function generateId() {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
}

app.get('/api/v1', (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});

app.get('/api/v1/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/v1/notes', (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({ error: 'Content missing' });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };

  notes = notes.concat(note);

  res.json(note);
});

app.get('/api/v1/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/v1/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);

  res.status(204).end();
});

app.use(unknownEndpoint);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
