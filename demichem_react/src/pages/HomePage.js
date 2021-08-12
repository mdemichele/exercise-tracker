import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/base/Title.js';
import Table from '../components/HomePage/Table.js';

function HomePage({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  const history = useHistory();
  
  // Method to handle loading exercises 
  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const data = await response.json();
    setExercises(data);  
  }
  
  // Handle Delete Exercise Function 
  const onDelete = async (id) => {
    const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
    
    if ( response.status === 204) {
      setExercises(exercises.filter( exercise => exercise._id !== id ));
    } else {
      console.error(`Failed to delete exercise with the id ${id}, error status: ${response.status}`);
    }
  }
  
  // Handle Edit Exercise Function 
  const onEdit = async (exercise) => {
    await setExerciseToEdit(exercise);
    await history.push(`/exercises/${exercise._id}`);
  }
  
  // Load Exercises when component is mounted 
  useEffect(() => {
    loadExercises();
  }, []);
  
  return (
    <section className="App-page App-home-page">
      <Title title="Welcome to the Exercise Tracker Web App"/>
      
      <div className="App-home-description-container">
        <p className="App-home-description">This project was built for CS 290 - Web Development. Below is a list of your recorded exercises. To create a new exercise, click the link above. To edit an exercise, click the edit icon. To delete an exercise, click the delete icon.</p>
      </div>
      
      
      <Table exercises={exercises} onEdit={onEdit} onDelete={onDelete} />
    </section>
  );
}

export default HomePage;