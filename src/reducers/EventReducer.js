const defaultState = {
    error: '',
    isLoading: false,
    id: '',
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'EVENT_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true,
                id: action.id
            });
        case 'EVENT_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data: action.data
            });
        case 'EVENT_FAILURE':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving event'
            });
       
        default:
            return state;
    }
}




