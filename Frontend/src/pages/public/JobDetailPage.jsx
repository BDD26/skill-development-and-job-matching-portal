// GET /jobs/:id – Public Job Detail View
import { useParams } from 'react-router-dom';
const JobDetailPage = () => {
  const { id } = useParams();
  return <div><h1>Job Detail</h1><p>TODO: Job ID: {id}</p></div>;
};
export default JobDetailPage;
