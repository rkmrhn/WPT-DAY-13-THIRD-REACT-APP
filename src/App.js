import React from "react";
function App() {
  let count = 1;
  let MyCounterFun=()=>{
    alert("how r you");
  }

  return (
    <>
      <div className="ms-5">
        <h1>Counter app</h1>
        <h1>1</h1>
        <input type="button" value="like me" onClick={MyCounterFun}/>
      </div>
    </>
  );
}

export default App;
