import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const randomNumber = () => {
    return (Math.floor(Math.random() * 100 + 1))
  };

  const DEFAULT_STOPWATCH = 10;

  const [stopwatch, setStopwatch] = useState(DEFAULT_STOPWATCH);
  const [number, setNumber] = useState(randomNumber());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
     setIsVisible((number % 3 === 0) || (number % 5 === 0));
    const timer = setInterval(updateStopwatch, 1000);
    return () => clearInterval(timer);
  }, [number]);

  const updateStopwatch = () => {
    setStopwatch((prev) => prev - 1);
  };

  useEffect(() => {
    if (stopwatch < 0) {
      setNumber(randomNumber());
      setStopwatch(10);
    }

    if (stopwatch === DEFAULT_STOPWATCH - 5) {
      setIsVisible(false);
    }
  }, [stopwatch]);

  return (
    <div className="App">
      <p>{`Timer: ${stopwatch}`}</p>
      <p>{`Random number: ${number}`}</p>
      {isVisible && <p>Acerto</p>}
    </div>
  );
}

export default App;
