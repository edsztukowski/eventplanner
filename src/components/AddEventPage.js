import AddEventForm from './AddEventForm';
import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';

export class AddEventPage extends React.Component {
    onSubmit = (event) => {
        this.props.addEvent(event);
        this.props.history.push('/');
    }
    
    render() {
        return (
           <div><AddEventForm onSubmit={this.onSubmit} employees={this.props.employees} tempEvent={this.props.tempEvent.tempEvent} /></div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addEvent: (event) => dispatch(addEvent(event))
})

const mapStateToProps = (state) => ({
    tempEvent: state.events.tempEvent,
    employees: state.employees
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEventPage);