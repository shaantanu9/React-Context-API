import "./styles.css";
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import { useContext } from "react";
import { counterContextData } from "./context/Countercontex";

export default function App() {
  const { count, buttonHandler } = useContext(counterContextData);
  // console.log(contextvalue, "counter")
  return (
    <div className="App">
      <Counter value={count} />
      <CounterButton value={buttonHandler} />
    </div>
  );
}
