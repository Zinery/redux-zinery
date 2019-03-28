// here is the body layout:
//  body component contains event-card
//  event card contains two parts: image and details
//  pull image and details from api

import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllExternalEvents} from '../../../redux/actions/eventAction';

import Event from '../Body/Events/Event/Event';
import EventList from './Events/EventList/EventList'


class Body extends Component {

  state = {}

  componentDidMount() {
      this.props.getAllExternalEvents();
  }

  render() {
    const events = this.props.events.eventApiArray
    console.log(events)
    
    return(
      events.map((event) => { 
          return (
            
              <div className="component-Body">
                <div className="event-card">
                  {event.image ? (<img src= {event.image} />) : (<div className="event-card-img-container" />)}
                  <div className="event-card-details-container">
                    <h6>{event.title}</h6>
                    <br />
                    <ul id={event.id}>
                    <li>{event.type}</li>
                      <li>{event.location}</li>
                      <li>{event.date}</li>
                      <li>{event.price}</li>
                      <li><a href={event.url}>Purchase</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            
          );
    })
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { getAllExternalEvents})(Body);
