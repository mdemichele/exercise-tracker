function CreateForm({ name, setName, reps, setReps, weight, setWeight, unit, setUnit, date, setDate, handleSubmit }) {
  return (
    <form className="App-form" onSubmit={handleSubmit}>
    
      <div className="App-input-group-1">
        <label className="App-form-label">Exercise Name</label>
        <input required type="text" className="App-form-input" value={name} onChange={e => setName(e.target.value)}/>
      </div>
      
      <div className="App-input-group-2">
        <label className="App-form-label">Reps</label>
        <input required type="number" className="App-form-input" value={reps} onChange={e => setReps(e.target.value)}/>
      </div>
      
      <div className="App-input-group-2">
        <label className="App-form-label">Weight</label>
        <input required type="number" className="App-form-input" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      
      <div className="App-input-group-2">
        <label className="App-form-label">Units</label>
        <select required className="App-form-input" value={unit} onChange={e => setUnit(e.target.value)}>
          <option value="lbs">Lbs</option>
          <option value="kgs">Kgs</option>
        </select>
      </div>
      
      <div className="App-input-group-1">
        <label className="App-form-label">Date</label>
        <input required type="date" className="App-form-input" value={date} onChange={e => setDate(e.target.value)}/>
      </div>
      
      <button type="submit" className="App-form-button">Submit</button>
    </form>
  );
}

export default CreateForm;