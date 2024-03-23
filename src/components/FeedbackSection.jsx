import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
