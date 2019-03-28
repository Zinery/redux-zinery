import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllExternalEvents} from '../../../../../redux/actions/eventAction';
import EventList from '../EventList/EventList';

class Event extends Component {


  state = {}

  componentDidMount() {
      this.props.getAllExternalEvents();
  }


  render() {
    console.log(this.props)
    const events = this.state.events.eventApiArray

    return(
        <React.Fragment>
          {
            
              
              <div className="event-card">
                <div className="event-card-img-container">
                  <img src = {events.image} />
                </div>
                <div className="event-card-details-container">
                  <h6>Event Details</h6>
                  <br />
                  
                    <p key={events.id}>
                      <span> {events.type} </span> |{` `}
                      <span> </span>
                      <EventList/>
                    </p>
                  
                </div>
              </div>
              
           
          }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { getAllExternalEvents})(Event);
