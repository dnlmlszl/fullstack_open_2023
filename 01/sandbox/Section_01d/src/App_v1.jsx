import { useState } from 'react';

function App() {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  function handleLeftClick() {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
      // right: clicks.right,
    };

    setClicks(newClicks);
  }
  function handleRightClick() {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
      // left: clicks.left,
    };

    setClicks(newClicks);
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
    </div>
  );
}

export default App;
