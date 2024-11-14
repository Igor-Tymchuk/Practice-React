import { createContext, useState } from "react";
export const yourContext = createContext();

export const NewContext = ({ children }) => {
  const [yourValue, setYourValue] = useState(false);
  const toggleTheme = () => setYourValue(!yourValue);
  const artur = "Artur is power";
  const contextFn = { toggleTheme, artur, yourValue };

  return (
    <yourContext.Provider value={contextFn}>{children}</yourContext.Provider>
  );
};
