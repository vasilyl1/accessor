
export const updateUser = (user) => {
    return {
        type: 'updateUser',
        payload: user,
    };
};

export const updateUserNavigation = (usermenu) => {
    return {
        type: 'updateUserNavigation',
            payload: usermenu,
    };
};

export const updateUserNotifications = (notifications) => {
    return {
        type: 'updateUserNotifications',
        payload: notifications
    };
};

export const updateAiError = (message) => {
    return {
        type: 'updateAiError',
        payload: message
    };
};