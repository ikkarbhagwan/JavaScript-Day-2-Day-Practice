import { useState } from "react";
import "./styles.css";

const disableBtn = () => {
  const [value, setValue] = useState(0);

  const changeValue = (e) => {
    return setValue(e.target.value);
  };
  return (
    <>
      <input type="text" placeholder="Type here" onChange={changeValue} />
      <button disabled={value.length < 1}>Submit</button>
    </>
  );
};

export default disableBtn;
