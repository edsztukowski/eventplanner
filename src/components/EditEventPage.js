import EditEventForm from './EditEventForm';
import React from 'react';
import { connect } from 'react-redux';
import { editEvent, removeEvent } from '../actions/events';

export class EditEventPage extends React.Component {
    onSubmit = (event) => {
        this.props.editEvent(this.props.event._id, event);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeEvent(this.props.event._id);
        this.props.history.push('/');
    }
    
    render() {
        return (
           <div>
                <EditEventForm onSubmit={this.onSubmit} eventToEdit={this.props.event} />
                <button onClick={this.onRemove}>Remove</button>
           </div>
           
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editEvent: (eventId, updates) => dispatch(editEvent(eventId, updates)),
    removeEvent: (eventId) => dispatch(removeEvent(eventId))
})

const mapStateToProps = (state, props) => ({
    event: state.events.allEvents.find((event) => event._id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);