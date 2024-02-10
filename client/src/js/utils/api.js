// route to authenticate the user via OAuth 2.0
export const loginUser = async () => {
    try {
        await fetch('/api/auth/google',
            {
                //mode: 'no-cors',
            });
            console.log('attempted to log in');
    } catch (err) {
        console.error(err);
    }
};

// route to log out the user with OAuth 2.0
export const logoutUser = async () => {
    try {
        await fetch('/api/auth/logout',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log('attempted to log out');
    } catch (err) {
        console.error(err);
    }
};