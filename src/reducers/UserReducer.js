const defaultState = {
    error: '',
    isLoading: false,
    id: '',
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'USER_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
                id: action.id,
            });
        case 'USER_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                id: action.id,
                data:action.data
            });
        case 'USER_FAILURE':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while getting user',
                id:action.id
            });
        default:
            return state;
    }
}




