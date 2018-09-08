import React from 'react';
import AddEventPage from '../components/AddEventPage';
import Calendar from '../components/Calendar';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Calendar} exact={true} />
                <Route path="/add" component={AddEventPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;