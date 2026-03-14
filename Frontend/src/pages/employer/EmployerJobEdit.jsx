// GET /employer/jobs/:id/edit – Edit Job Form
import { useParams } from 'react-router-dom';
const EmployerJobEdit = () => {
  const { id } = useParams();
  return <div><h1>Edit Job</h1><p>TODO: Edit form for job ID: {id}</p></div>;
};
export default EmployerJobEdit;
