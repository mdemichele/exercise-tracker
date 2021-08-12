import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditForm from '../components/EditPage/EditForm.js';
import Title from '../components/base/Title.js';

function EditPage({ exerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);
  const [id] = useState(exerciseToEdit._id);
  
  const history = useHistory(); 
  
  const handleSubmit = async (event) => {
    // Prevent Default 
    await event.preventDefault();
    // create an updated exercise object 
    const updatedExercise = {
      name: name,
      reps: reps,
      weight: weight,
      unit: unit,
      date: date 
    };
    // Create a PUT Request to the api 
    const response = await fetch(`/exercises/${id}`, { 
      method: 'PUT',
      body: JSON.stringify(updatedExercise),
      headers: { 'Content-Type': 'application/json' }
    });
    
    // Send Response back 
    if (response.status === 200) {
      await alert(`You've successfully updated you exercise named ${name}`);
      history.push('/');
    } else {
      alert(`Server reponded with a ${response.status} error, try again.`);
    }
    
  }
  
  return (
    <section className="App-page App-edit-page">
      <Title title="Edit Your Exercise"/>
      <div className="App-home-description-container">
        <p className="App-home-description">To edit an exercise, fill out all the fields below with any updated information and click submit. You'll receive an alert notfiying you of a successful update.</p>
      </div>
      <EditForm 
        name={name}
        setName={setName}
        reps={reps}
        setReps={setReps}
        weight={weight}
        setWeight={setWeight}
        unit={unit}
        setUnit={setUnit}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}
      />
    </section>
  );
}

export default EditPage;