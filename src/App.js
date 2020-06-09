import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameDetails from "./components/GameDetails";
import FirstPage from "./components/FirstPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/el/:id" component={GameDetails} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
