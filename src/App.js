import React from "react";
import Header from "../src/components/header/Header";
import Dashboard from "../src/components/home/Dashboard";
import Footer from "../src/components/footer/Footer";
import About from "../src/components/header/about/About";
import Contact from "../src/components/header/contact/Contact";
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
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
