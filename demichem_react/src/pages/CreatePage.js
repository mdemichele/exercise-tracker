import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/base/Title.js';
import Form from '../components/CreatePage/Form.js';

function CreatePage(props) {
  // STATE VARIABLES 
  const [name, setName] = useState('');
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState('lbs');
  const [date, setDate] = useState(new Date());
  
  // HISTORY PROPERTY
  const history = useHistory();
  
  // Handles creating a new exercise 
  async function handleSubmit(event) {
    // Prevent the default form behavior 
    await event.preventDefault();
    
    // create a JSON object of all the state variables in their current state 
    const newExercise = { 
      name: name, 
      reps: reps, 
      weight: weight, 
      unit: unit, 
      date: date 
    };
    
    // Create a POST Request to the api 
    const response = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: { 'Content-Type': 'application/json' }
    });
    
    // If request was successful 
    if (response.status === 201) {
      await alert(`You've successfully created a new exercise named ${name}`);
      history.push('/');
    } else {
      alert(`Server Responded with ${response.status} error, try again.`);
    }
  }
  
  return (
    <section className="App-page App-create-page">
      <Title title="Create A New Exercise"/>
      <div className="App-home-description-container">
        <p className="App-home-description">To create a new exercise, fill out all the fields below and click submit. You'll receive an alert notfiying you of a successful submission.</p>
      </div>
      <Form name={name} setName={setName} reps={reps} setReps={setReps} weight={weight} setWeight={setWeight} unit={unit} setUnit={setUnit} date={date} setDate={setDate} handleSubmit={handleSubmit}/>
    </section>
  );
}

export default CreatePage;