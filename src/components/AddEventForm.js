import React from 'react';
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
            description: '',
            employees: []
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
                classes: 'color-2 color-3',
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
            <div className="form-container">
                <h2 className="align-left">Add a new Event</h2>
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <h2>Title</h2>
                    <input 
                        className="text-input"
                        type="text"
                        placeholder="Event Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <div className="times">
                        <div className="flex-col">
                            <h2>Start Time</h2>
                            <Kronos
                                time={this.state.startDateTime}
                                onChangeDateTime={this.onStartDateChange}
                            />
                        </div>
                        <div className="flex-col">
                            <h2>End Time</h2>
                            <Kronos
                                time={this.state.endDateTime}
                                onChangeDateTime={this.onEndDateChange}
                                min={this.state.startDateTime}
                            />
                        </div>
                    </div>
                    
                    <div id="event-description">
                        <textarea 
                            placeholder="Event Description"
                            value={this.state.description} 
                            onChange={this.onDescriptionChange} />
                    </div>
                
                <div>
                        <button className="save">Save Event</button>
                </div>
                </form>
            </div>
        )
    }
}