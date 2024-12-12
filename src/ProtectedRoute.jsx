import { useContext } from "react";
import { AuthContext } from "./context/AuthProviders";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
    }

    return children;
};


export default ProtectedRoute;