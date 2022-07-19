import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Register from "./components/register";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import LogoutForm from "./components/logoutForm";
import MovieForm from "./components/movieForm";

import auth from "./services/authServices";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRout from "./components/common/protectedRoute";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    //  console.log("-------------");
    //  console.log(user);
    //  console.log("-------------");
    return (
      <div>
        <ToastContainer />
        <NavBar user={user} />
        <Switch className="navBar">
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={LogoutForm} />
          <ProtectedRout path="/movies/:id" componet={MovieForm} />
          <Route
            path="/movies"
            render={(props) => <Movies {...props} user={user} />}
          />
          <Redirect exact from="/" to="/movies" />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
