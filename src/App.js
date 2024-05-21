import React from 'react';
import { Router } from "@reach/router";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <SinglePost path="/post/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
