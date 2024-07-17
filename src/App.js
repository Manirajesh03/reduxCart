import React from "react";
import Products from "./components/Products";
import { Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Router>
        <Route>{Route}</Route>
      </Router> */}
      <Products />
    </div>
  );
};

export default App;
