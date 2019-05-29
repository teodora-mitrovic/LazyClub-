const defaultState = {
    error: '',
    isLoading: false,
    isSaved: false,
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'SAVE_EVENT_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
            });
        case 'SAVE_EVENT_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data,
                isSaved: true
            });
        case 'SAVE_EVENT_FAILURE':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving event'
            });
      
        default:
            return state;
    }
}




