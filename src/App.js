import React from "react";

import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/OurStory">
          <OurStory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
