import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectPostId: null,
    error: false
  };
  componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        // console.log(response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Phone"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Somthing went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
