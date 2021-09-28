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
  //above we have added second parameter ie an empty array
  //which is a list of dependency
  //if left blank it runs on initial render
  //if we provide a dependency then when that changes
  //useeffect will render
  return (
    <>
      <h1>{value}</h1>
      <button onClick={clickhandler}>increase</button>
    </>
  );
};

export default DocumentTitleuseState;
