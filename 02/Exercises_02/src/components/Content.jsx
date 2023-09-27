import Part from './Part';

const Content = ({ parts }) => {
  return (
    <section>
      {parts &&
        parts.map((part) => {
          const { name, exercises } = part;
          return (
            <Part key={name}>
              {name} {exercises}
            </Part>
          );
        })}
    </section>
  );
};

export default Content;
