import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingButton from '../../Shared/LoadingButton/LoadingButton'

const RequreAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        return <LoadingButton />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequreAuth;