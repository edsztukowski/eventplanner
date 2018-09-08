import React from 'react';
import {connect} from 'react-redux';

const Dashboard = (props) => (
    <div>
      {
        props.events.map((event) => (
          <ul>
            <li>
              {event.name}, {event.location}, {event.date}
            </li>
          </ul>
        ))
      }
    </div>
)

const mapStateToProps = (state) => {
    return {
      events: state.events
    };
  };
  
  export default connect(mapStateToProps)(Dashboard);
