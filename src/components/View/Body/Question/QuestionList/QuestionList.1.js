import React, { Component } from 'react';

import { connect } from 'react-redux';
import { upvote, downvote } from '../../../../../actions/questionAction';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
export class QuestionList extends Component {
  render() {
    const { questions } = this.props.questions;

    return (
      <React.Fragment>
        {questions.map(question => {
          return (
            <li key={question.id}>
              <span> {question.type} </span> |{` `}
              <span> {question.voteCount} </span>
              <div className="card-content">
                <button
                  className="vote-button"
                  onClick={() => this.props.upvote(question.id)}
                >
                  <FaThumbsUp />
                </button>
                <button
                  className="vote-button"
                  onClick={() => this.props.downvote(question.id)}
                >
                  <FaThumbsDown />
                </button>
              </div>
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(
  mapStateToProps,
  { upvote, downvote }
)(QuestionList);

/*
import React from 'react';
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const QuestionList = (props) => {
    return (
        <React.Fragment>
            {props.questions.map(question => {
                return (
                    <li key={question.id}>
                        <span> {question.type} </span> | <span> {question.voteCount} </span>
                        <button onClick={() => props.upvote(question.id)}><FaThumbsUp /></button>
                        <button onClick={() => props.downvote(question.id)}><FaThumbsDown /></button>
                    </li>
                )
            })}
        </React.Fragment>
    )
}

export default QuestionList
*/
