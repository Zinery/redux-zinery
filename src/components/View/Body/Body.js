import React, { Component } from 'react';
//import Question from '../Body/Question/Question/Question';

import {connect} from 'react-redux'
import {getAllExternalEvents} from '../../../redux/actions/eventAction'

class Body extends Component {
  state = {}

  componentDidMount(){
    this.props.getAllExternalEvents()
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="component-Body">
          <div className="question-card">
            <div className="question-card-img-container" />
            </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapToStateProps = (state) => ({
  events: state.events
})

export default connect(mapToStateProps, {getAllExternalEvents})(Body);
