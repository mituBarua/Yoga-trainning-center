import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Home from "./Page/Home/Home/Home";
import Login from "./Page/Login/Login/Login";
import ModalPopup from "./Page/Login/Login/ModalPopup";
import PrivateRoute from "./Page/Login/PrivateRoute/PrivateRoute";
import Footer from "./Page/Shared/Footer";
import Header from "./Page/Shared/Header";
import ServiceDetails from "./Page/ServiceDetails/ServiceDetails";
import NotFound from "./Page/NotFound/NotFound";
import About from "./Page/AboutUs/About";
import Contact from "./Page/ContactUs/Contact";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/home">
              <ModalPopup></ModalPopup>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
