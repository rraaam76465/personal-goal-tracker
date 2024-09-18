import React from 'react';

const GoalItem = ({ goal }) => {
  return (
    <li>
      <span>{goal.goal}</span> - <span>{goal.deadline}</span>
    </li>
  );
};

export default GoalItem;
