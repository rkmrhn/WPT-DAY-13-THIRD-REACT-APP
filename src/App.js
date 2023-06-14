import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}

function AppHeader() {
  return (
    <div className="row bg-primary fs-3 p-3">
      <div className="col">home</div>
      <div className="col">myProjecct</div>
      <div className="col">header</div>
    </div>
  );
}
function AppBody() {
  return (
    <>
      <div className="alert alert-success fs-3 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        maiores sit, delectus odit explicabo in itaque eos reprehenderit
        tempore, odio, earum soluta quidem rerum quis fugit maxime iure ducimus?
        Aspernatur!
      </div>
      <div className="alert alert-success fs-3 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        maiores sit, delectus odit explicabo in itaque eos reprehenderit
        tempore, odio, earum soluta quidem rerum quis fugit maxime iure ducimus?
        Aspernatur!
      </div>
    </>
  );
}

function AppFooter() {
  return (
    <>
      <div
        className="bg-dark text-light d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        Lorem ipsum dolor sit amet impedit.
      </div>
    </>
  );
}

export default App;
