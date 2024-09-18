import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import { Container, Typography, Paper } from '@mui/material';
import './App.css';

const App = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <Container>
      <Paper sx={{ padding: 3, textAlign: 'center', marginTop: 2 }}>
        <Typography variant="h3" gutterBottom>
          Personal Goal Tracker
        </Typography>
        <GoalForm addGoal={addGoal} />
        <GoalList goals={goals} />
      </Paper>
    </Container>
  );
};

export default App;
