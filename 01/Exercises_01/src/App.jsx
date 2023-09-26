import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

function App() {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  const total = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return (
    <main>
      <Header course={course} />

      <Content parts={parts} />

      <Total total={total} />
    </main>
  );
}

export default App;
