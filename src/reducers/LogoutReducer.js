import * as Actions from '../actions/logoutActions'

const defaultState = {
    error: '',
    isLoading: false,
    isLoggedOut: false,
    data: []
    
};
 
const LogoutReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.LOGOUT_LOADING: 
            return Object.assign({}, state, { 
                isLoading: true,
                isLoggedOut: false
            });

        case Actions.LOGOUT_SUCCESS:
            return Object.assign({}, state, { 
                isLoggedOut: true,
                isLoading: false,
                data:action.data
            });
        case Actions.LOGOUT_FAILURE:
            return Object.assign({}, state, { 
                isLoggedOut: false,
                isLoading: false,
                error: 'Error while logging out'
            });
        default:
            return state;
    }
}


export default LogoutReducer;

