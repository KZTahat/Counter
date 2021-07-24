import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function LogInButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <Button onClick={loginWithRedirect} variant="success">
      Log In
    </Button>
  );
}

export default LogInButton;
