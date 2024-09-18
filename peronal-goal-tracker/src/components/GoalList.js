import React from 'react';
import { Container, List, ListItem, ListItemText, Paper } from '@mui/material';
import GoalItem from './GoalItem';

const GoalList = ({ goals }) => {
  return (
    <Container>
      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <List>
          {goals.map((goal, index) => (
            <GoalItem key={index} goal={goal} />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default GoalList;
