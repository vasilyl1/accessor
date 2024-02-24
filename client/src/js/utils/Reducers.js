import { 
    updateUser, 
    updateUserNavigation, 
    updateUserNotifications,
    updateAiError
} from "./Actions";

export function reducer(state, action) {
    switch (action.type) {
        case updateUser:
            return {
                ...state,
                loggedUser: action.payload
            };
        case updateUserNavigation:
            return {
                ...state,
                userNavigation: action.payload
            };
        case updateUserNotifications:
            return {
                ...state,
                notifications: action.payload
            };
        case updateAiError:
            return {
                ...state,
                aiError: action.payload
            };
        default:
            return state;
    }
};