import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/base/Title.js';
import Table from '../components/HomePage/Table.js';

function HomePage({ setRunToEdit }) {
  const [runs, setRuns] = useState([]);
  const history = useHistory();
  
  // Method to handle loading runs 
  const loadRuns = async () => {
    const response = await fetch('/runs');
    const data = await response.json();
    
    // Sanitize dates into human-readable form 
    data.map(run => { 
      let dateObject = new Date(run.date);
      let dateString = dateObject.toDateString();
      run.date = dateString;
     })
    
    setRuns(data);  
  }
  
  // Handle Delete Run Function 
  const onDelete = async (id) => {
    const response = await fetch(`/runs/${id}`, { method: 'DELETE' });
    
    if ( response.status === 204) {
      setRuns(runs.filter( run => run._id !== id ));
    } else {
      console.error(`Failed to delete exercise with the id ${id}, error status: ${response.status}`);
    }
  }
  
  // Handle Edit Exercise Function 
  const onEdit = async (run) => {
    await setRunToEdit(run);
    await history.push(`/runs/${run._id}`);
  }
  
  // Load Exercises when component is mounted 
  useEffect(() => {
    loadRuns();
  }, []);
  
  return (
    <section className="App-page App-home-page">
      <Title title="Welcome to RunTracker"/>
      
      <div className="App-home-description-container">
        <p className="App-home-description">Below is a list of your recorded run. To add a new run, click the link above. To edit a run, click the edit icon. To delete a run, click the delete icon.</p>
      </div>
      
      
      <Table runs={runs} onEdit={onEdit} onDelete={onDelete} />
    </section>
  );
}

export default HomePage;