function CreateForm({ distance, setDistance, date, setDate, handleSubmit }) {
  return (
    <form className="App-form" onSubmit={handleSubmit}>
      
      <div className="App-input-group-2">
        <label className="App-form-label">Distance (miles)</label>
        <input required type="number" className="App-form-input" value={distance} onChange={e => setDistance(e.target.value)}/>
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