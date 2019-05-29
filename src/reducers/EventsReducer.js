
const defaultState = {
    error: '',
    isLoading: false,
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'EVENTS_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true
            });
        case 'EVENTS_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data:action.data
            });
        case 'EVENTS_ERROR':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving event'
            });
        default:
            return state;
    }
}




