import { useState } from "react";

const ToggleGrid = () => {
  const [buttons, setButtons] = useState(Array(9).fill(false));
  const toggleButton = (index) => {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[index] = !newButtons[index];
      return newButtons;
    });
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      <button onClick={() => toggleButton(0)}>
        {buttons[0] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(1)}>
        {buttons[1] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(2)}>
        {buttons[2] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(3)}>
        {buttons[3] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(4)}>
        {buttons[4] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(5)}>
        {buttons[5] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(6)}>
        {buttons[6] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(7)}>
        {buttons[7] ? "On" : "Off"}
      </button>
      <button onClick={() => toggleButton(8)}>
        {buttons[8] ? "On" : "Off"}
      </button>
    </div>
  );
};

export default ToggleGrid;
