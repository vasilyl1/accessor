
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

export const updateError = (message) => {
    return {
        type: 'updateError',
        payload: message
    };
};

export const addMessageUser = (message) => {
    return {
        type: 'addMessageUser',
        payload: message
    };
};

export const addMessageAssistant = (message) => {
    return {
        type: 'addMessageAssistant',
        payload: message
    };
};