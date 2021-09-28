import { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  //the useState preserves the size vale and trigges re-render when changed

  const checkSize = () => {
    //here we are changing the size hence triggers re-render
    setSize(window.innerWidth);
  };

  useEffect(() => {
    //on window we added event listener to check its size
    //each time we call the callback function
    //we also trigger the re-render
    //moment we trigger the re-render we call useEffect
    //hence triggers the event listeners many times
    window.addEventListener("resize", checkSize);
    console.log("useeffect");
    return () => {
      // whenever we have a useEffet
      // we have a clean up function
      //which when we exit the useEffecct is triggered
      //so before we set up another event listener
      //the cleanup function is triggered
      //and stop the event that occured before
      window.removeEventListener("resize", checkSize);
      console.log("cleanup");
    };
  });

  return (
    <>
      <h1>Screen Size</h1>
      <h1>{size}</h1>
    </>
  );
};

export default UseEffectCleanup;
