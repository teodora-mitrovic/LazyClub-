import { HOME_SUCCESS, HOME_FAILURE, HOME_LOADING } from '../actions/homeActions.js';
import axios from 'react-native-axios';

export function home(token) {

    
        return (dispatch) => {
            dispatch(HomeLoading());

            axios.get('http://192.168.0.15:8000/api/auth/home', 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization" : "Bearer "+token

                }})
            .then(response => {
                dispatch(HomeSuccess(response.data))
            })
            .catch(error => {
                dispatch(HomeFailure(error))
            })
    }
}

function HomeLoading() {
    console.log('loading******');

    return {
        type: HOME_LOADING,
        isLodaing:true
    }
}

function HomeSuccess(data) {
    

    return {
        type: HOME_SUCCESS,
        data:data,
        isLodaing:false
    }
}

function HomeFailure(error) {
    console.log(error);

    return {
        type: HOME_FAILURE,
        isLodaing:false
    }
}