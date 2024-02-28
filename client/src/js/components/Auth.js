import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {

        // update user profile with dummy user
        dispatch( updateUser( state.dummyUser ));
        dispatch(
            updateUserNavigation( [{ name: 'Login', href: '/auth' }] )

        );
        dispatch(
            updateUserNotifications(
                [
                    { name: 'Please login', href: '/auth' }
                ]
            )
        );

        // Submit the form programmatically when the component mounts
        document.getElementById('googleLogoutForm').submit();
    }, []);

    return (
            <>
            <form id="googleLogoutForm" action="/api/auth/logout" method="post">
                <input type="submit" value="" />
            </form>

            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">401</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Logged Out</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">You have been logged out.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                    </div>
                </div>
            </main>
            </>
    );
}