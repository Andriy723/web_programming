// Ваш компонент ProtectedRoute
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...props }) => {
    const storedEmail = localStorage.getItem('email');
    const lastLoginTime = localStorage.getItem('lastLoginTime');
    const timeWindow = 60 * 1000;

    const isValidUser = storedEmail && lastLoginTime && Date.now() - parseInt(lastLoginTime) < timeWindow;

    if (!isValidUser) {
        alert('Your session has expired. Please log in again.');
        return <Navigate to="/login" />;
    }

    return <Route {...props} element={element} />;
};

export default ProtectedRoute;
