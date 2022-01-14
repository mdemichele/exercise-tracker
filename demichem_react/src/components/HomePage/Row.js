import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Row({ run, index, onDelete, onEdit }) {
  return (
    <tr key={index}>
      <td key={`distance-${index}`}>{run.distance}</td>
      <td key={`date-${index}`}>{run.date}</td>
      <td key={`edit-${index}`}>{<MdEdit onClick={ () => onEdit(run) }/>}</td>
      <td key={`delete-${index}`}>{<MdDeleteForever onClick={ () => onDelete(run._id)}/>}</td>
    </tr>
  );
}

export default Row;