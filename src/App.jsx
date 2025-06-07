import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncriment = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });

    setCounters(updatedCounter);
  };

  const handleDecriment = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  return (
    <>
      <div className='max-w-7xl mx-auto '>
        <h3 className='text-center mt-5 text-2xl font-medium'>
          Simple Counter Application
        </h3>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncriment(counter.id)}
            onDecrement={() => handleDecriment(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
      </div>
    </>
  );
}

export default App;
