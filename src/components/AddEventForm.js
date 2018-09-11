import React from 'react';
import moment from 'moment';
import Kronos from 'react-kronos';


export default class AddEventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: props.tempEvent ? props.tempEvent['_id'] :  '',
            name: props.tempEvent ? props.tempEvent.name : '',
            startDateTime: props.tempEvent ? props.tempEvent.startDateTime : '',
            endDateTime: props.tempEvent ? props.tempEvent.endDateTime : '',
            error: '',
            description: ''
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
                startDateTime: new Date(this.state.startDateTime),
                endDateTime: new Date(this.state.endDateTime),
                classes       : 'color-2 color-3',
                description: this.state.description
            })
        }
    }

    onStartDateChange = (e) => {
        this.setState({
            startDateTime: new Date(e._d)
        })
    }

    onEndDateChange = (e) => {
        this.setState({
            endDateTime: new Date(e)
        })
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

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
                <h2>Start Time</h2>
                <Kronos
                    time={this.state.startDateTime}
                    onChangeDateTime={this.onStartDateChange}
                />
                <h2>End Time</h2>
                <Kronos
                    time={this.state.endDateTime}
                    onChangeDateTime={this.onEndDateChange}
                    min={this.state.startDateTime}
                />
                <textarea value={this.state.description} onChange={this.onDescriptionChange} />

               
               <div>
                    <button className="button__blue">Save Event</button>
               </div>
            </form>
        )
    }
}