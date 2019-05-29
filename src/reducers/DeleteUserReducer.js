const defaultState = {
    error: '',
    isLoading: false,
    id: '',
    data: [],
    isDeleted: false
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'DELETE_USER_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
                id: action.id
            });
        case 'DELETE_USER_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data,
                isDeleted: true
            });
        case 'DELETE_USER_FAILURE':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving event'
            });
       
        default:
            return state;
    }
}




