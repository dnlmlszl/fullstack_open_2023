import Part from './Part';

const Content = ({ part }) => {
  return (
    <section>
      <Part>
        {part.name} {part.exercises}
      </Part>
    </section>
  );
};

export default Content;
