import Part from './Part';

const Content = ({ part, exercise }) => {
  return (
    <section>
      <Part>
        {part} {exercise}
      </Part>
    </section>
  );
};

export default Content;
