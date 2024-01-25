import { useState } from "react";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Data Binding</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={(elem) => setValue(elem.target.value)}
      />
      <p>{value}</p>
    </>
  );
};

export default App;
