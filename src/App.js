import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Services from "./Pages/Services/Services/Services";
import AddService from "./Pages/Services/AddService/AddService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>>
            </Route>
            <Route path="/addService">
              <AddService></AddService>>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
