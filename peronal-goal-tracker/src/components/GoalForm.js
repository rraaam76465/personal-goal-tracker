import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

const GoalForm = ({ addGoal }) => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal && deadline) {
      addGoal({ goal, deadline });
      setGoal('');
      setDeadline('');
    }
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
        <TextField
          label="Goal"
          variant="outlined"
          fullWidth
          margin="normal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <TextField
          label="Deadline"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Add Goal
        </Button>
      </Box>
    </Container>
  );
};

export default GoalForm;
