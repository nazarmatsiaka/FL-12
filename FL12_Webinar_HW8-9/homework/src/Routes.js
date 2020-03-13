import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Main from './components/Main/Main';
import CourseForm from './components/CourseForm/CourseForm';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/addCourse" component={ CourseForm } />
        <Route exact path="/edit/:courseId" component={ CourseForm } />
        <Redirect to="/" />
    </Switch>
);

export default Routes;
