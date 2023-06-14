import React, { useState } from "react";
function App() {
  return (
    <>
      <h1>Counter app</h1>
      <CounterApp/>
    </>
  );
}
function CounterApp() {

  //stateful variable declaration
  let [count,setCount] = useState(1);

  let MyCounterApp = () => {
    count=count+1;
    //setcount() is used to update the valaue on userinterface(UI)
    setCount(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <input type="button" value="like me" onClick={MyCounterApp} />
    </>
  );
}
export default App;
