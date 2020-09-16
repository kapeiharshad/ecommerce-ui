import React from "react";
import Header from "../src/components/header/Header";
import Dashboard from "../src/components/home/Dashboard";
import Footer from "../src/components/footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
