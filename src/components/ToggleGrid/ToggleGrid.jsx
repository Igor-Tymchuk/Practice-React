const ToggleGrid = ({ up }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      <button onClick={() => up()}>{up ? "Off" : "On"}</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
      <button onClick={() => up()}>Off</button>
    </div>
  );
};

export default ToggleGrid;
