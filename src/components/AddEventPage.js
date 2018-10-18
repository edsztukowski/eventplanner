import AddEventForm from './AddEventForm';
import React from 'react';
import { connect } from 'react-redux';
import { startAddEvent } from '../actions/events';

export class AddEventPage extends React.Component {
    onSubmit = (event) => {
        this.props.startAddEvent(event);
        this.props.history.push('/calendar');
    }
    
    render() {
        return (
           <div><AddEventForm onSubmit={this.onSubmit} employees={this.props.employees} tempEvent={this.props.tempEvent.tempEvent} /></div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddEvent: (event) => dispatch(startAddEvent(event))
})

const mapStateToProps = (state) => ({
    tempEvent: state.events.tempEvent,
    employees: state.employees
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage);