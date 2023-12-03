interface TotalProps {
  totalExercises: number;
}

const Total: React.FC<TotalProps> = ({ totalExercises }) => {
  return (
    <section>
      <p>Number of exercises {totalExercises}</p>
    </section>
  );
};

export default Total;
