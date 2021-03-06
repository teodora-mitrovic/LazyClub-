const defaultState = {
    error: '',
    isLoading: false,
    data: [],
    isRetrieved: false
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'PROJECTS_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
            });
        case 'PROJECTS_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data,
                isRetrieved: true
            });
        case 'PROJECTS_ERROR':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving projects'
            });
        default:
            return state;
    }
}




