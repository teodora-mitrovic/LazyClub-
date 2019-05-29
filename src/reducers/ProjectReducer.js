const defaultState = {
    error: '',
    isLoading: false,
    id: '',
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'PROJECT_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
                id: action.id
            });
        case 'PROJECT_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data
            });
        case 'PROJECT_ERROR':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving project'
            });
        default:
            return state;
    }
}




