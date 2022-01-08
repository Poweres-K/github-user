import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <div>
          <Switch>
            <PrivateRoute exact path="/">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthWrapper>
  );
}

export default App;
