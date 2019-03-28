// here is the body layout:
//  body component contains event-card
//  event card contains two parts: image and details
//  pull image and details from api

import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllExternalEvents} from '../../../redux/actions/eventAction';

import Event from '../Body/Events/Event/Event';
import Vote from './Events/Vote/Vote'


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
        let vote = <Vote event = {event}/>
          return (
            
              <div className="component-Body">
                <div className="event-card">
                  {event.image ? (<img src= {event.image} />) : (<div className="event-card-img-container" />)}
                  <div className="event-card-details-container">
                    <h6>{event.title}</h6>
                    <br />
                    <section id={event.id}>
                       <p>{event.type}</p>
                      <p>{event.location}</p>
                      <p>{event.date}</p>
                      <p>{event.price}</p>
                      <p><a href={event.url} target='_blank' rel='noopener noreferrer'>Seatgeek </a></p>
                    </section>
                    {vote}
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
