import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import NotFound from './components/NotFound';
import Featured from './components/Featured';

import CourseContainer from './components/courses/CourseContainer';
import CourseList from './data/courses';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} title="About"/>

      <Route path="courses" component={Courses}>
        <IndexRedirect to="html" />
        <Route path="css" component={CourseContainer} data={CourseList.CSS} />
        <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="javascript" component={CourseContainer} data={CourseList.JS} />
      </Route>
      <Route path="teachers" component={Teachers} />
      <Route path="featured/:topic/:name" component={Featured} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
