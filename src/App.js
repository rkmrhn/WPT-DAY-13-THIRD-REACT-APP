import React from "react";
function App() {
  return (
    <>
      <h1>Counter app</h1>
      <CounterApp/>
    </>
  );
}
function CounterApp() {
  let count = 1;

  let MyCounterApp = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <input type="button" value="like me" onClick={MyCounterApp} />
    </>
  );
}
export default App;
