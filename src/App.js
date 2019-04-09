import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
