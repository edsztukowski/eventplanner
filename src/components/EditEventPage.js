import EditEventForm from './EditEventForm';
import React from 'react';
import { connect } from 'react-redux';
import { editEvent } from '../actions/events';

export class EditEventPage extends React.Component {
    onSubmit = (event) => {
        this.props.editEvent(this.props.event._id, event);
        this.props.history.push('/');
    }
    
    render() {
        return (
           <div><EditEventForm onSubmit={this.onSubmit} eventToEdit={this.props.event} /></div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editEvent: (eventId, updates) => dispatch(editEvent(eventId, updates))
})

const mapStateToProps = (state, props) => ({
    event: state.events.allEvents.find((event) => event._id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);