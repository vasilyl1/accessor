// route to authenticate the user via OAuth 2.0
export const loginUser = async () => {
    try {
        await fetch('/api/auth/google',
            {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    } catch (err) {
        console.error(err);
    }
};