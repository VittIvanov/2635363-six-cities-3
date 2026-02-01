import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from '../../types/types';


const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated }) =>

  isAuthenticated ? children : <Navigate to="/login" />;

export default PrivateRoute;
