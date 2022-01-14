import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/base/Title.js';
import Form from '../components/CreatePage/Form.js';

function CreatePage(props) {
  // STATE VARIABLES 
  const [distance, setDistance] = useState(0);
  const [date, setDate] = useState('');
  
  // HISTORY PROPERTY
  const history = useHistory();
  
  // Handles creating a new exercise 
  async function handleSubmit(event) {
    // Prevent the default form behavior 
    await event.preventDefault();
    
    // create a JSON object of all the state variables in their current state 
    const newRun = { 
      distance: distance,  
      date: date 
    };
    
    // Create a POST Request to the api 
    const response = await fetch('/run', {
      method: 'POST',
      body: JSON.stringify(newRun),
      headers: { 'Content-Type': 'application/json' }
    });
    
    // If request was successful 
    if (response.status === 201) {
      await alert(`You've successfully created a new exercise.`);
      history.push('/');
    } else {
      alert(`Server Responded with ${response.status} error, try again.`);
    }
  }
  
  return (
    <section className="App-page App-create-page">
      <Title title="Add a New Run"/>
      <div className="App-home-description-container">
        <p className="App-home-description">To add a new run, fill out all the fields below and click submit. You'll receive an alert notfiying you of a successful submission.</p>
      </div>
      <Form distance={distance} setDistance={setDistance} date={date} setDate={setDate} handleSubmit={handleSubmit}/>
    </section>
  );
}

export default CreatePage;