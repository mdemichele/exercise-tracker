import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/base/Title.js';
import Table from '../components/HomePage/Table.js';
import * as d3 from 'd3';
import moment from 'moment';
import heatmap from '../heat-map.js';

function HomePage({ setRunToEdit }) {
  const [runs, setRuns] = useState([]);
  const history = useHistory();
  
  // Method to handle loading runs 
  const loadRuns = async () => {
    const response = await fetch('/runs');
    const data = await response.json();
    console.log(data);
    // Sanitize dates into human-readable form 
    // data.map(run => { 
    //   let dateObject = new Date(run.date);
    //   let dateString = dateObject.toDateString();
    //   run.date = dateString;
    //  })
    console.log(data);
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
  
  // Method to handle loading chart 
  const loadChart = async () => {
    let heatmap1 = heatmap(runs, {
      x: d => d.date,
      y: d => d.distance
    });
    console.log(heatmap1);
    let visualization = document.getElementById("visualization-container");
    visualization.appendChild(heatmap1);
  }
  
  // Handle Edit Exercise Function 
  const onEdit = async (run) => {
    await setRunToEdit(run);
    await history.push(`/runs/${run._id}`);
  }
  
  // Load Exercises when component is mounted 
  useEffect(async () => {
    await loadRuns();
    await loadChart();
  }, []);
  
  return (
    <section className="App-page App-home-page">
      <Title title="Welcome to RunTracker"/>
      
      <div className="App-home-description-container">
        <p className="App-home-description">Below is a list of your recorded run. To add a new run, click the link above. To edit a run, click the edit icon. To delete a run, click the delete icon.</p>
      </div>
      
      <Table runs={runs} onEdit={onEdit} onDelete={onDelete} />
      
      {/* Heat Map Visualization Section */}
      <div id="visualization-container"></div>
      
    </section>
  );
}

export default HomePage;