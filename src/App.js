import React from "react";
import Header from "./Components/common/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import CourseHome from "./Components/allcourses/CourseHome";
import Team from "./Components/team/Team";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./Components/pricing/Pricing";
import Blog from "./Components/blog/Blog";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/common/footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/courses" exact component={CourseHome} />
          <Route path="/team" exact component={Team} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/journal" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
