const ToggleGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
      <button>Off</button>
    </div>
  );
};

export default ToggleGrid;
