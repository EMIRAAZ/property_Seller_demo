import { Navigate } from 'react-router-dom';
import { checkAuth } from '../../utils';

const PrivateRoute = ({ role, children }) =>
  checkAuth(role) ? children : <Navigate to="/admin/login" />;

export default PrivateRoute;
