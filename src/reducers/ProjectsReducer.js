const defaultState = {
    error: '',
    isLoading: false,
    data: []
    
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
                data: action.data
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




