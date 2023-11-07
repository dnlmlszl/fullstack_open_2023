import { useCounter } from './hooks/useCounter';
import Form from './components/Form';

function App() {
  const counter = useCounter();

  return (
    <main>
      <section>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
}

export default App;
