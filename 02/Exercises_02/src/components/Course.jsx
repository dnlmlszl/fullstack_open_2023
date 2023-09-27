import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ name, parts, id, total }) => {
  return (
    <section>
      <Header course={name} />

      <Content parts={parts} />

      <Total total={total} />
    </section>
  );
};

export default Course;
