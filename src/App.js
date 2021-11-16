import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
