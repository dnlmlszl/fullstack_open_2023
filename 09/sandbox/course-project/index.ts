import express from 'express';
import { calculator, Operation } from './calculator';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello FullStack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;

  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  const bmi = calculateBmi(Number(height), Number(weight));
  res.send({
    weight,
    height,
    bmi,
  });
});

app.post('/calculator', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if (!value1 || isNaN(Number(value1))) {
    return res.status(400).send({ error: '...' });
  }

  if (!value2 || isNaN(Number(value2))) {
    return res.status(400).send({ error: 'Invalid value2' });
  }

  const operation = op as Operation;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), operation);

  return res.send({ result });
});

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).send({ error: 'parameters missing' });
  }

  if (!Array.isArray(daily_exercises) || isNaN(Number(target))) {
    return res.status(400).send({ error: 'malformatted parameters' });
  }

  if (!daily_exercises.every((d) => !isNaN(Number(d)))) {
    return res.status(400).send({ error: 'malformatted parameters' });
  }

  const result = calculateExercises(
    daily_exercises.map(Number),
    Number(target)
  );
  return res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
