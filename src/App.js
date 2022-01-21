import React, { useState } from "react";
import MainLayout from "./MainLayout";
import Login from "./components/Login";
import InfoWindow from "./components/InfoWindow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.scss";

function App() {
  const [InfoWindowShowing, setInfoWindowShowing] = useState(false);

  return (
    <div className={InfoWindowShowing ? "lock-overflow" : null}>
      <Router>
        <Switch>
          <Route exact path="/">
            <InfoWindow
              InfoWindowShowing={InfoWindowShowing}
              setInfoWindowShowing={setInfoWindowShowing}
            />
            <MainLayout setInfoWindowShowing={setInfoWindowShowing} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;