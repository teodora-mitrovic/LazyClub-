
const defaultState = {
    error: '',
    isLoading: false,
    data: []
    
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'HOME_LOADING': 
            return Object.assign({}, state, { 
                isLoading: true
            });
        case 'HOME_SUCCESS':
            return Object.assign({}, state, { 
                isLoading: false,
                data:action.data
            });
        case 'HOME_FAILURE':
            return Object.assign({}, state, { 
                isLoading: false,
                error: 'Error while retreiving home screen content'
            });
        default:
            return state;
    }
}




