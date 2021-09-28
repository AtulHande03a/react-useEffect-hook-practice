import { useState, useEffect } from "react";
const DocumentTitleuseState = () => {
  const [value, setValue] = useState(0);

  const clickhandler = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    //setting up conditional insde the useEfect
    if (value >= 1) {
      document.title = `Message (${value})`;
    }
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button onClick={clickhandler}>increase</button>
    </>
  );
};

export default DocumentTitleuseState;
