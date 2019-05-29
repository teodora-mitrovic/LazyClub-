import { USERS_SUCCESS, USERS_FAILURE, USERS_LOADING } from '../actions/usersActions.js';
import axios from 'react-native-axios';

export function users(token) {

    return (dispatch) => {
        dispatch(UsersLoading());
        axios.get('http://192.168.0.15:8000/api/auth/users', 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+token

            }})
        .then(response => {
        dispatch(UsersSuccess(response.data))
        })
        .catch(error => {
            dispatch(UsersFailure(error))
        })
        



    } //dispatch
}

function UsersLoading() {
    console.log('loading');

    return {
        type: USERS_LOADING
    }
}

function UsersSuccess(data) {

    return {
        type: USERS_SUCCESS,
        data: data
    }
}

function UsersFailure(error) {
    console.log(error);

    return {
        type: USERS_FAILURE
    }
}