// 1. tell React to create some state for the component by importing useState
import React, { useState } from "react";

function Counter() {
  // 2. once being imported, call useState inside of the component
  // 3. tell React to create some new internal state for the component with an initial value of 0
  // 4. useState return an array that has two variables: count, setCount
  const [count, setCount] = useState(0);

  function increment() {
    // // console.log(`before setState: ${count}`); // button hasn't been clicked yet?


    // // 6. update state component and re-render component by calling setCount setter fn, only when button is clicked
    // setCount(count + 1); // =setCount(0 + 1)

    // console.log(count)  // 0, count isn't updated immediately,

    // // 7. call setCount twice, to update the counter by two every time we click
    // setCount(count + 1); // =setCount(0 + 1)


    // // console.log(`after setState: ${count}`); // button hasn't been clicked yet?

    // 8. pass a callback fn, currentCount is the previous state
    // React will pass in the current value of count before updating it.
    // call setCount twice, the number will change by adding 2 each time
    setCount((currentCount) => currentCount + 1);
    // setCount((currentCount) => currentCount + 1);
  
  }

  console.log("In component: ", count)


  // 5. use count variable to display its current value in button element
  // when button is clicked, it runs increment fn that calls the setCount fn to:
  // 1) update the value of count in React's internal state to be count+1
  // 2) re-render Counter component
  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
