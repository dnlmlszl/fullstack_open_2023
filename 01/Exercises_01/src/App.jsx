import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

function App() {
  const course = 'Half Stack application development';
  const part1 = { name: 'Fundamentals of React', exercises: 10 };
  const part2 = { name: 'Using props to pass data', exercises: 7 };
  const part3 = { name: 'State of a component', exercises: 14 };

  const total = part1.exercises + part2.exercises + part3.exercises;

  return (
    <main>
      <Header course={course} />

      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />

      <Total total={total} />
    </main>
  );
}

export default App;
