import "./styles.css";
import { Route, Link } from "react-router-dom";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("./compnents/login/Login"));
const Signup = React.lazy(() => import("./compnents/signup/Signup"));
const Darshboard = React.lazy(() =>
  import("./../compnents/dashboard/Darshboard")
);

export default function App() {
  return (
    <div className="App">
      <ul>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/darshboard">darshboard</Link>
      </ul>
      <Suspense fallback={<div>Please Wait.....</div>}>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/darshboard">
          <Darshboard />
        </Route>
      </Suspense>
    </div>
  );
}
