import { EVENT_SUCCESS, EVENT_FAILURE, EVENT_LOADING, 
          SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE, SAVE_EVENT_LOADING } from '../actions/eventActions.js';
import axios from 'react-native-axios';



export function event(id, token) {

    
    return (dispatch) => {
        dispatch(EventLoading(id));

        axios.get('http://192.168.0.15:8000/api/auth/events/'+id, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+token

            }})
        .then(response => {
            dispatch(EventSuccess(response.data))
        })
        .catch(error => {
            dispatch(EventFailure(error))
        })
    }
}




function EventLoading(id) {
    console.log('loading');

    return {
        type: EVENT_LOADING,
        id: id
       
    }
}



function EventSuccess(data, id) {
    console.log('event found');
    console.log(data);

    return {
        type: EVENT_SUCCESS,
        data: data,
        id: id
    }
}

function EventFailure(error) {
    console.log(error);

    return {
        type: EVENT_FAILURE
    }
}


///////////////////  saving event


export function saveEvent(data, token) {
    return  (dispatch) => {
        dispatch(SaveEventLoading());
        axios.post('http://192.168.0.15:8000/api/auth/events', data,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+token

            }})
        .then(response => {
            dispatch(SaveEventSuccess(response.data))
        })
        .catch(error => {
            dispatch(SaveEventFailure(error))
        })
    }
}

function SaveEventSuccess(data){
    return {
        type: SAVE_EVENT_SUCCESS,
        data: data
    }
}

function SaveEventLoading() {
    console.log('loading');

    return {
        type: SAVE_EVENT_LOADING,
       
    }
}


function SaveEventFailure(error) {
    console.log('loading');

    return {
        type: SAVE_EVENT_FAILURE,
        error: error
       
    }
}


