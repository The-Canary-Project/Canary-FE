import React from 'react';
import { Provider } from 'react-redux';
import { SocketProvider } from '../../provider/socketProvider';
import { Auth } from '../auth/Auth';
import store from '../../store';
import { AboutUs } from '../about-us/AboutUs';
import Header from '../header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';

export default function App() {
  return (
    <Provider store={store}>
   
        <SocketProvider>
          <Router>
            <Route
              path="/(.+)"
              component={Header}
            />
            <Switch>
              <Route
                exact path="/"
                component={Auth}
              />
              <Route
                exact path="/student"
                component={StudentDashboard}
              />
              <Route
                exact path="/teacher"
                component={TeacherDashboard}
              />
              <Route
                exact path="/about-us"
                component={AboutUs}
              />
            </Switch>
          </Router>
        </SocketProvider>
  
    </Provider>
  );
}
