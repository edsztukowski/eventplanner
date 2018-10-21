import EditEventForm from './EditEventForm';
import React from 'react';
import { connect } from 'react-redux';
import { startEditEvent, startRemoveEvent } from '../actions/events';

export class EditEventPage extends React.Component {
    onSubmit = (event) => {
        this.props.startEditEvent(this.props.event._id, event).then(() => {
            this.props.history.push('/calendar');
        });
    }
    onRemove = () => {
        this.props.startRemoveEvent(this.props.event._id).then(() => {
            this.props.history.push('/calendar');
        });
    }
    
    render() {
        return (
           <div>
                <EditEventForm onSubmit={this.onSubmit} eventToEdit={this.props.event} />
                <button className="delete" onClick={this.onRemove}>Remove</button>
           </div>
           
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditEvent: (eventId, updates) => dispatch(startEditEvent(eventId, updates)),
    startRemoveEvent: (eventId) => dispatch(startRemoveEvent(eventId))
})

const mapStateToProps = (state, props) => ({
    event: state.events.allEvents.find((event) => event._id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);