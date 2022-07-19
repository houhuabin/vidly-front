import { Component } from "react";
import auth from "../services/authServices";
class LogoutForm extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogoutForm;
