import React from 'react';
import moment from 'moment';
import TimeRange from 'react-time-range';


export default class AddEventForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            _id: props.tempEvent ? props.tempEvent['_id'] :  '',
            name: props.tempEvent ? props.tempEvent.name : '',
            startDateTime: props.tempEvent ? props.tempEvent.startDateTime : '',
            endDateTime: props.tempEvent ? props.tempEvent.endDateTime : '',
            error: ''
        }

    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name) {
            this.setState(() => ({
                error: 'Please provide name and start date time'
            }))
        } else {
    
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                _id: this.state._id,
                name: this.state.name,
                startDateTime: this.state.startDateTime,
                endDateTime: new Date('2018-09-09T18:00:00.000Z'),
                classes       : 'color-2 color-3'
            })
        }
    }

    onStartDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ startDateTime: createdAt }))
        }
    }

    onEndDateChange = (endAt) => {
        if (endAt) {
            this.setState(() => ({ endDateTime: endAt }))
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    className="text-input"
                    type="text"
                    placeholder="name"
                    autoFocus
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                <TimeRange
                    startMoment={moment(this.state.startDateTime).format("hhmm")}
                    endMoment={this.state.endDateTime}
                    onChange={this.returnFunction}
                />
               <div>
                <button className="button__blue">Save Event</button>
               </div>
            </form>
        )
    }
}




/*
        _id            :guid(),
         name          : 'Meeting , dev staff!',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
         classes       : 'color-1'
*/