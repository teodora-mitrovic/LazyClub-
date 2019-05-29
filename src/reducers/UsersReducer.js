const defaultState = {
    error: '',
    isLoading: false,
    data: []
    
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'USERS_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true
            });
        case 'USERS_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data
            });
        case 'USERS_ERROR':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while getting user'
            });
        default:
            return state;
    }
}




