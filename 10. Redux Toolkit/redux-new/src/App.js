import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./redux/slices/counterSlice";

// API call
// Rest architecture -> react query , swr
// cache ->  apollo, apollo client

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App render");

    return () => console.log("Unmounting App");
  }, [count]);

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increase + 1</button>
        <button onClick={() => dispatch(decrement())}>Decrease - 1</button>
        <button onClick={() => dispatch(incrementByAmount(27))}>
          Increment by 27
        </button>
        <button onClick={() => dispatch(incrementAsync(23))}>
          Thunk Increase
        </button>
      </div>
    </div>
  );
}

export default App;
