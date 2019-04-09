import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>add a post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              name="title"
              type="text"
              id="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea
              name="body"
              id="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <button type="submit">Add post</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
