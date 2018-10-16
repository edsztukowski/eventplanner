import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';

export default () => (
    <div>
      <h1>Welcome message</h1>
      <div className="flex-col">
        <Link to="/calendar">Calendar</Link>
        <Link to="/employees">Manage Employees</Link>
      </div>
    </div>
)

