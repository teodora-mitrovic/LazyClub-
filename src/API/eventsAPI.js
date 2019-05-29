import { EVENTS_SUCCESS, EVENTS_FAILURE, EVENTS_LOADING } from '../actions/eventsActions.js';
import axios from 'react-native-axios';

export function events(token) {

    
        return (dispatch) => {
            dispatch(EventsLoading());

            axios.get('http://192.168.0.15:8000/api/auth/events', 
                 {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization" : "Bearer "+token

                }})
            .then(response => {
                dispatch(EventsSuccess(response.data))
            })
            .catch(error => {
                dispatch(EventsFailure(error))
            })
    }
}

function EventsLoading() {
    console.log('loading******');

    return {
        type: EVENTS_LOADING,
        isLodaing:true
    }
}

function EventsSuccess(data) {
    

    return {
        type: EVENTS_SUCCESS,
        data:data,
        isLodaing:false
    }
}

function EventsFailure(error) {
    console.log(error);

    return {
        type: EVENTS_FAILURE,
        isLodaing:false
    }
}