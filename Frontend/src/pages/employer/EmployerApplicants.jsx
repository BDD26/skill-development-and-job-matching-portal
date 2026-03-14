// GET /employer/jobs/:id/applicants – ATS Applicants List
import { useParams } from 'react-router-dom';
const EmployerApplicants = () => {
  const { id } = useParams();
  return <div><h1>Applicants</h1><p>TODO: ATS view for job ID: {id} – shortlist / reject / notes</p></div>;
};
export default EmployerApplicants;
