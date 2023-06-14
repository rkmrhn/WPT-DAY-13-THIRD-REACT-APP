import React, { useState } from "react";
function App() {
  return (
    <>
      <h1>Counter app</h1>
      <CounterApp />
      <CounterApp />
      <CounterApp />
      <CounterApp />
      <CounterApp />
    </>
  );
}
function CounterApp() {
  //stateful variable declaration
  let [count, setCount] = useState(1);

  let MyCounterApp = () => {
    count = count + 1;
    //setcount() is used to update the valaue on userinterface(UI)
    setCount(count);
  };
  return (
    <>
      <h5>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ipsa
        mollitia rerum, corrupti eos aspernatur expedita laboriosam laudantium
        quas voluptates commodi, iusto dignissimos! Reprehenderit dolorem, quis
        animi a in harum.
      </h5>
      <h5>
        {count}
        <input type="button" value="like me" onClick={MyCounterApp} />
      </h5>
    </>
  );
}

export default App;
