import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/counterSlice";
import Posts from "./components/posts";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncriment = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecriment = (counterId) => {
    dispatch(decrement(counterId));
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
        <Posts />
      </div>
    </>
  );
}

export default App;
