

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

    dummyUser: { name: '', email: '', imageUrl: './assets/images/notLoggedInUser.png' },

    error: null,

    conversation: {
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": "What is the accessor application?" },
            { "role": "assistant", "content": "The accessor application is the tool to simplify the access for non-compatible devices" }
        ]
    }
};

export function reducer(state = initialState, action) {
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
        case 'updateError':
            return {
                ...state,
                error: action.payload
            };
        case 'addMessageUser':
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    messages: [
                        ...state.conversation.messages,
                        { "role": "user", "content": action.payload }
                    ]
                }
            };
            case 'addMessageAssistant':
            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    messages: [
                        ...state.conversation.messages,
                        { "role": "assistant", "content": action.payload }
                    ]
                }
            };
        default:
            return state;
    }
};