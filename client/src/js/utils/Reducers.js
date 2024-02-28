

const initialState = {

    navigation: [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Calendar', href: '#', current: false },
      ],
    
      userNavigation: [{ name: 'Login', href: '/auth' }],
    
      notifications: [
        { name: 'Please login', href: '/auth' }
      ],
    
      loggedUser: { name: '', email: '', imageUrl: './assets/images/notLoggedInUser.png' },

      dummyUser : { name: '', email: '', imageUrl: './assets/images/notLoggedInUser.png' },

      aiError : null
};

export function reducer (state = initialState, action) {
    switch (action.type) {
        case 'updateUser':
            return {
                ...state,
                loggedUser: action.payload
            };
        case 'updateUserNavigation':
            return {
                ...state,
                userNavigation: action.payload
            };
        case 'updateUserNotifications':
            return {
                ...state,
                notifications: action.payload
            };
        case 'updateAiError':
            return {
                ...state,
                aiError: action.payload
            };
        default:
            return state;
    }
};