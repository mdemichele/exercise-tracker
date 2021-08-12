import Row from './Row.js';

function Table({ exercises, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Exercise Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Units of Measurement</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      { exercises.map( exercise => <Row exercise={exercise} onDelete={onDelete} onEdit={onEdit}/>)}
      </tbody>
    </table>
  );
}

export default Table;