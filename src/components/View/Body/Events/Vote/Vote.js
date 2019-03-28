import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvote, downvote, getAllExternalEvents}  from '../../../../../redux/actions/eventAction';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export class Vote extends Component {

  state = {};

//   componentDidMount() {
//     this.props.getAllExternalEvents();
// }

  // handleUpVote = (id) => {
  //   this.props.upvote();
  // }

  // handleUpVote = (id) => {
  //   this.props.upvote();
  // }


  render() {
    const { event } = this.props.event;
    
    return (
      <React.Fragment>
        {
          
              <section key={this.props.event.id}>
                <span> {this.props.event.type} </span> |{` `}
                <span> {this.props.event.voteCount} </span>
                <div className="card-content">
                  <button
                    className="vote-button"
                    onClick={() => this.props.upvote(this.props.event.id)}
                  >
                    <FaThumbsUp />
                  </button>
                  <button
                    className="vote-button"
                    onClick={() => this.props.downvote(this.props.event.id)}
                  >
                    <FaThumbsDown />
                  </button>
                </div>
              </section>
            
        }
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   events: state.events
// });


export default connect(null,{upvote, downvote})(Vote);
