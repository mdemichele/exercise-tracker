import Row from './Row.js';

function Table({ runs, onEdit, onDelete }) {
  return (
    <table>
      <thead key="table-header">
        <tr key="table-header-row">
          <th key="table-header-distance">Distance</th>
          <th key="table-header-date">Date</th>
          <th key="table-header-edit">Edit</th>
          <th key="table-header-delete">Delete</th>
        </tr>
      </thead>
      <tbody key="table-body">
      { runs.map( (run, index) => <Row run={run} index={index} onDelete={onDelete} onEdit={onEdit}/>)}
      </tbody>
    </table>
  );
}

export default Table;