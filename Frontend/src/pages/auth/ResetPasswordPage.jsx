// GET /reset-password/:token – Reset Password Page
import { useParams } from 'react-router-dom';
const ResetPasswordPage = () => {
  const { token } = useParams();
  return <div><h1>Reset Password</h1><p>TODO: Reset form for token: {token}</p></div>;
};
export default ResetPasswordPage;
