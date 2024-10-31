const Counter = ({ plus, minus, value, reset }) => {
  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={plus}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
