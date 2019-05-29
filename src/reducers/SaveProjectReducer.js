const defaultState = {
    error: '',
    isLoading: false,
    isSaved: false,
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'SAVE_PROJECT_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
            });
        case 'SAVE_PROJECT_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data,
                isSaved: true
            });
        case 'SAVE_PROJECT_FAILURE':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving event',
                isSaved: false
            });
      
        default:
            return state;
    }
}




