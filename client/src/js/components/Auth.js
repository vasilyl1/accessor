import React, {useEffect} from 'react';

export function Auth ()  {
    useEffect(() => {
        // Submit the form programmatically when the component mounts
        document.getElementById('googleAuthForm').submit();
    }, []);

    return (
        <div>
            <form id="googleAuthForm" action="/api/auth/google" method="get">
               <input type="submit" value="Redirecting for authorization" />
            </form>
        </div>
    );
}

export function Logout () {
    useEffect(() => {
        // Submit the form programmatically when the component mounts
        document.getElementById('googleLogoutForm').submit();
    }, []);

    return (
        <div>
            <form id="googleLogoutForm" action="/api/auth/logout" method="post">
               <input type="submit" value="Redirecting for logout" />
            </form>
        </div>
    );
}