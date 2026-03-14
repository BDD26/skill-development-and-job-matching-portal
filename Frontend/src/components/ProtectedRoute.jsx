// ProtectedRoute – redirects to /login if not authenticated
// Usage: <ProtectedRoute><PageComponent /></ProtectedRoute>
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // TODO: Replace with real auth context check
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
