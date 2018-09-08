import React from 'react';
import {connect} from 'react-redux';
import { ReactAgenda, guid  } from 'react-agenda';
import { addTempEvent } from '../actions/events';
 

var colors= {
  'color-1':"rgba(102, 195, 131 , 1)" ,
  "color-2":"rgba(242, 177, 52, 1)" ,
  "color-3":"rgba(235, 85, 59, 1)"
}

const now = new Date();
 
class Calendar extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      items: props.events,
      selected:[],
      cellHeight:30,
      showModal:false,
      locale:"us",
      rowsPerHour:2,
      numberOfDays:4,
      startDate: new Date(),
    }
    this.handleCellSelection = this.handleCellSelection.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)
    this.handleRangeSelection = this.handleRangeSelection.bind(this)
  }
 
handleCellSelection(item){
  this.props.addTempEvent({
    tempEvent: {
      _id: guid(),
      name: '',
      startDateTime: new Date(item),
      endDateTime: '',
      error: ''
    }
  });
  this.props.history.push('/add');
};

handleItemEdit(item){
  console.log('handleItemEdit', item)
}
handleRangeSelection(item){
  console.log('handleRangeSelection', item)
}
  render() {
    return (
      <div>
        <ReactAgenda
          minDate={now}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          disablePrevButton={false}
          startDate={this.state.startDate}
          cellHeight={this.state.cellHeight}
          locale={this.state.locale}
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          autoScale={false}
          fixedHeader={true}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onRangeSelection={this.handleRangeSelection.bind(this)}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTempEvent: (tempEvent) => dispatch(addTempEvent(tempEvent))
});

const mapStateToProps = (state) => {
    return {
      events: state.events.allEvents,
      tempEvent: state.events.tempEvent
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

