import React from "react";
import Header from "../src/components/header/Header";
import Dashboard from "../src/components/home/Dashboard";
import Footer from "../src/components/footer/Footer";
import About from "../src/components/header/about/About";
import Contact from "../src/components/header/contact/Contact";
import SignIn from "../src/components/header/navbar/signIn/SignIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/signin" component={SignIn}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
