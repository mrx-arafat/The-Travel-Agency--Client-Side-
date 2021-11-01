import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./components/AddService/AddService";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addServices">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
