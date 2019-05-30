import { LOGOUT_SUCCESS, LOGOUT_FAILURE, LOGOUT_LOADING } from '../actions/logoutActions.js';
import axios from 'react-native-axios';


export function logout (token) {

    

    return (dispatch) => {
        dispatch(LogoutLoading(token));

        axios.post('http://192.168.0.15:8000/api/auth/logout', null,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
            }})
        .then(response => {
            dispatch(LogoutSuccess(response.data))
        })
        .catch(error => {
            dispatch(LogoutFailure(error))
        })



    } //dispatch
}

function LogoutLoading (token)  {
    console.log('loading logout');
    console.log(token);
    return {
        type: LOGOUT_LOADING,
    }
    
    
}

function LogoutSuccess(data) {
    console.log('loggedin');

    return {
       type: LOGOUT_SUCCESS,
        data:data 
    }
    
    
}

function LogoutFailure (error) {
    console.log(error);
    return {
        type: LOGOUT_FAILURE,
        error: error
    }
    
}



