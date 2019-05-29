import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING } from '../actions/loginActions.js';
import axios from 'react-native-axios';


export function login (email, password) {

    

    return (dispatch) => {
        dispatch(LoginLoading(email, password));

        

        axios.post('http://192.168.0.15:8000/api/auth/login', 
            {
                email: email, 
                password: password
            }, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }})
        .then(response => {
            dispatch(LoginSuccess(response.data))
        })
        .catch(error => {
            dispatch(LoginFailure(error))
        })



    } //dispatch
}

function LoginLoading (email, password)  {
    console.log('loading');
    return {
        type: LOGIN_LOADING,
        email: email,
        password: password
    }
    
    
}

function LoginSuccess(data) {
    console.log('loggedin');
    console.log(data.access_token);
    console.log(data.token_type);

    return {
       type: LOGIN_SUCCESS,
        data:data 
    }
    
    
}

function LoginFailure (error) {
    console.log(error);
    return {
        type: LOGIN_FAILURE
    }
    
}



