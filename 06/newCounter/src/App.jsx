import Display from './components/Display';
import Button from './components/Button';

function App() {
  return (
    <main className="container">
      <Display />
      <div className="button-container">
        <Button type="INC" label="+" />
        <Button type="ZERO" label="Reset" />
        <Button type="DEC" label="-" />
      </div>
    </main>
  );
}

export default App;
