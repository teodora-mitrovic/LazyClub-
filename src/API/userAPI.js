import { USER_SUCCESS, USER_FAILURE, USER_LOADING,
         SAVE_USER_SUCCESS, SAVE_USER_FAILURE, SAVE_USER_LOADING } from '../actions/userActions.js';
import axios from 'react-native-axios';

export function user(id, token) {

    return (dispatch) => {
        dispatch(UserLoading(id));

        axios.get('http://192.168.0.15:8000/api/auth/users/'+id, 
        {
            header: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Authorization": "Bearer "+token
            }
        })
        .then(response => {
                dispatch(UserSuccess(response.data, id))
        })
        .catch(error => {
            dispatch(UserFailure(error, id))
        })

    } //dispatch
}

function UserLoading(id) {
    console.log('loading');

    return {
        type: USER_LOADING,
        id: id,
    }
}

function UserSuccess(data, id) {
    
    return {
        type: USER_SUCCESS,
        data: data,
        id: id
    }
}

function UserFailure(error, id) {
    console.log(error);

    return {
        type: USER_FAILURE,
        id: id
    }
}



//////////////////////// saving user

export function saveUser(data, token) {

    return (dispatch) => {
        dispatch(SaveUserLoading());

        axios.post('http://192.168.0.15:8000/api/auth/users', data, 
        {
            header: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Authorization": "Bearer "+token
            }
        })
        .then(response => {
                dispatch(SaveUserSuccess(response.data))
        })
        .catch(error => {
            dispatch(SaveUserFailure(error))
        })

    } //dispatch
}

function SaveUserLoading() {
    console.log('loading');

    return {
        type: SAVE_USER_LOADING,
        
    }
}

function SaveUserSuccess(data) {
    
    return {
        type: SAVE_USER_SUCCESS,
        data: data,
    }
}

function SaveUserFailure(error) {
    console.log(error);

    return {
        type: SAVE_USER_FAILURE,
    }
}


