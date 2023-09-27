import { useState } from 'react';
import History from './components/History';
import Button from './components/Button';

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  function handleLeftClick() {
    setAllClicks(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  }
  function handleRightClick() {
    setAllClicks(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  }

  return (
    <div>
      {left}
      <Button onHandleClick={handleLeftClick} text="left" />
      <Button onHandleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
