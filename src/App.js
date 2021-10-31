import React from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Events from "./pages/Events";
import Menu from "./pages/Menu";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Safety from "./pages/Safety";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import Reservations from "./pages/Reservations";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <>
        <TopNav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/events" component={Events} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/menu" component={Menu} />
          <Route path="/safety" component={Safety} />
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
