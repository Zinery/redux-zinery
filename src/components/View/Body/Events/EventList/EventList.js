import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvote, downvote, getAllExternalEvents}  from '../../../../../redux/actions/eventAction';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export class EventList extends Component {

  state = {};

  componentDidMount() {
    this.props.getAllExternalEvents();
}

  // handleUpVote = (id) => {
  //   this.props.upvote();
  // }

  // handleUpVote = (id) => {
  //   this.props.upvote();
  // }


  render() {
    
    
    console.log(this.props.events)
    const { events } = this.props.events.eventApiArray;
    return (
      <React.Fragment>
        {
          events.map(event => {
          return (
            <li key={event.id}>
              <span> {event.type} </span> |{` `}
              <span> </span>
              <div className="card-content">
                <button
                  className="vote-button"
                  onClick={() => this.props.upvote(event.id)}
                >
                  <FaThumbsUp />
                </button>
                <button
                  className="vote-button"
                  onClick={() => this.props.downvote(event.id)}
                >
                  <FaThumbsDown />
                </button>
              </div>
            </li>
          );
          })
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});


export default connect(mapStateToProps,{getAllExternalEvents, upvote, downvote})(EventList);
