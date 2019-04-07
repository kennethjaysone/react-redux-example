import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React with redux</h1>
        </header>
        <section>
          <PostForm />
          <hr />
          <Posts />
        </section>
      </div>
    );
  }
}

export default App;
