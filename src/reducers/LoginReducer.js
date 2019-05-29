import * as Actions from '../actions/loginActions'

const defaultState = {
    error: '',
    isLoading: false,
    isLoggedIn: false,
    data: []
    
};
 
const LoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.LOGIN_LOADING: 
            return Object.assign({}, state, { 
                isLoading: true,
                email: action.email,
                password: action.password,
                isLoggedIn: false
            });

        case Actions.LOGIN_SUCCESS:
            return Object.assign({}, state, { 
                isLoggedIn: true,
                isLoading: false,
                data:action.data
            });
        case Actions.LOGIN_FAILURE:
            return Object.assign({}, state, { 
                isLoggedIn: false,
                isLoading: false,
                error: 'Error while logging in'
            });
        default:
            return state;
    }
}


export default LoginReducer;

