import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import './App.css';


const App = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div className="App">
      <h1>Personal Goal Tracker</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
