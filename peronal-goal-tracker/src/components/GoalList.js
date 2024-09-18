import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal, index) => (
        <GoalItem key={index} goal={goal} />
      ))}
    </ul>
  );
};

export default GoalList;
