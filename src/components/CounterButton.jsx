//import {useState, useEffect,useRef} from 'react'
const CounterButton = ({ value }) => {
  console.log(value);
  return (
    <>
      <button onClick={value} className="bg-indigo-700 animate-bounce">
        Counter
      </button>
    </>
  );
};

export default CounterButton;
