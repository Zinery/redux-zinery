import React, { Component } from 'react';

import QuestionList from '../QuestionList/QuestionList';

class Question extends Component {
  render() {
    return (
      <div>
        <ul>
          <QuestionList />
        </ul>
      </div>
    );
  }
}

export default Question;
