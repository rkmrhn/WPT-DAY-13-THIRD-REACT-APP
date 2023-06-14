import React, { useState } from "react";
function App() {
  return (
    <>
      <h1>CounterApp</h1>
      <StringStyle />
    </>
  );
}
function StringStyle() {
  let [str, SetStr] = useState("Hello World");
  let ToLowerFun = () => {
    str = str.toLowerCase();
    SetStr(str);
  };
  let ToUpperFun = () => {
    str = str.toUpperCase();
    SetStr(str);
  };
  return (
    <>
      <h3>{str}</h3>
      <input type="button" value="lower case" onClick={ToLowerFun} />
      <input type="button" value="upper case" onClick={ToUpperFun} />
    </>
  );
}

export default App;
