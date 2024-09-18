import React from 'react';
import { ListItem, ListItemText, Divider } from '@mui/material';

const GoalItem = ({ goal }) => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={goal.goal}
          secondary={`Deadline: ${goal.deadline}`}
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default GoalItem;
