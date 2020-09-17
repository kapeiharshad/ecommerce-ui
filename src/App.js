import React from "react";
import Header from "../src/components/header/Header";
import Dashboard from "../src/components/home/Dashboard";
import Footer from "../src/components/footer/Footer";
import About from "../src/components/header/navbar/about/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
