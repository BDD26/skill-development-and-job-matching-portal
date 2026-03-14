// RoleRoute – redirects to /login if user doesn't have the required role
// Usage: <RoleRoute roles={['employer']}><PageComponent /></RoleRoute>
import { Navigate } from 'react-router-dom';

const RoleRoute = ({ roles, children }) => {
  // TODO: Replace with real auth context check
  const token    = localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // 'student' | 'employer' | 'admin' | 'super_admin'

  if (!token)               return <Navigate to="/login" replace />;
  if (!roles.includes(userRole)) return <Navigate to="/" replace />;

  return children;
};

export default RoleRoute;
