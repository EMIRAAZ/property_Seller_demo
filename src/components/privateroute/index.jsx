import { Navigate } from 'react-router-dom';
import { checkAuth } from '../../utils';

const PrivateRoute = ({ role, children }) =>
  checkAuth(role) ? (
    children
  ) : role === 'ADMIN' ? (
    <Navigate to="/admin/login" />
  ) : (
    <Navigate to="/agency/login" />
  );

export default PrivateRoute;
