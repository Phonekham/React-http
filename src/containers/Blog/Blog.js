import React, { Component } from "react";
// import axios from "../../axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          {/* <Redirect from="/" to="/posts" /> */}
          <Route render={() => <h1>Not found</h1>} />
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
