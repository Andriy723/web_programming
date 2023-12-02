import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
    const lastLoginTime = localStorage.getItem('lastLoginTime');
    if (isAuthenticated) {
        return element;
    }
    else if (!lastLoginTime) {
        return <Navigate to="/login"/>;
        // !isAuthenticated && !lastLoginTime
    }
};

export default ProtectedRoute;
