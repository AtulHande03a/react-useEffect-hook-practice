import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  const clickhandler = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    if (value >= 1) {
      document.title = `Message (${value})`;
    }
  }, [value]);

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={clickhandler}>increase</button>
    </div>
  );
}
