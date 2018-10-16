import React from 'react';
import AddEventPage from '../components/AddEventPage';
import EditEventPage from '../components/EditEventPage';
import Calendar from '../components/Calendar';
import Dashboard from '../components/Dashboard';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import EmployeeDashboard from '../components/EmployeeDashboard';

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/calendar" component={Calendar} exact={true} />
                <Route path="/add" component={AddEventPage} /> 
                <Route path="/edit/:id" component={EditEventPage} />
                <Route path="/employees" component={EmployeeDashboard} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;