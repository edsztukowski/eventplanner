import { combineReducers } from 'redux';
import events from './events';
import employees from './employees';

export default combineReducers({
 events,
 employees
});