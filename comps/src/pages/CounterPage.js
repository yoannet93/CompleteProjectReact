import useCounter from "../hooks/use-counter";
import Button from "../components/Button";


function CounterPage({ initialCount }) {
  const { counter, indrement } = useCounter(initialCount);
  return (
    <div>
      <h1>Counter is {counter}</h1>
      <Button primary onClick={indrement}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
