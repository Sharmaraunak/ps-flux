import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import PageNotFound from "./PageNotFound";
import { Route, Switch,Redirect } from "react-router-dom";
import ManageCoursesPage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="container-fluid">
        <ToastContainer autoClose={3000} hideProgressBar/>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/manage/:slug" component={ManageCoursesPage} />
        <Route path="/manage" component={ManageCoursesPage} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
