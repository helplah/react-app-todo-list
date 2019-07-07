import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Login({ className }) {
  return (
    <Button className={className} color="inherit">
      <Link to="/login" className="navbar-link">
        Log in
      </Link>
    </Button>
  );
}

export default Login;
