import React, { useEffect } from 'react';
import { useAccessorState } from '../utils/Context';
import { updateUser, updateUserNavigation, updateUserNotifications } from '../utils/Actions';

export function Auth() {
    useEffect(() => {
        // Submit the form programmatically when the component mounts
        document.getElementById('googleAuthForm').submit();
    }, []);

    return (
            <form id="googleAuthForm" action="/api/auth/google" method="get">
                <input type="submit" value="Redirecting for authorization" />
            </form>
    );
}

export function Logout() {
    const { state, dispatch } = useAccessorState(); // access global state and dispatch function
    useEffect(() => {

        // update user profile with dummy user
        dispatch({ type: updateUser, payload: state.dummyUser });
        dispatch({
            type: updateUserNavigation, payload: [{ name: 'Login', href: '/auth' }]

        });
        dispatch({
            type: updateUserNotifications, payload:
                [
                    { name: 'Please login', href: '/auth' }
                ]
        });

        // Submit the form programmatically when the component mounts
        document.getElementById('googleLogoutForm').submit();
    }, []);

    return (
            <form id="googleLogoutForm" action="/api/auth/logout" method="post">
                <input type="submit" value="Redirecting for logout" />
            </form>
    );
}