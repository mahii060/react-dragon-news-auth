import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utils/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    console.log(location);
    if (loading) {
        return <span className="loading loading-infinity loading-lg text-error"></span>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;