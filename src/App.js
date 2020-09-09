import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import ContactUs from "./components/Pages/ContactUs";
import SignUp from "./components/Pages/SignUp";
import Marketing from "./components/Pages/Marketing";
import Consulting from "./components/Pages/Consulting";
import AppFooter from "./components/footer";
import Scroll from "./components/ScrollToTop";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <Router>
      <Navbar />
      <WelcomeBanner />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
      </Switch>

      <AppFooter />
      <Scroll showBelow={250} />
    </Router>
  );
}

export default App;
