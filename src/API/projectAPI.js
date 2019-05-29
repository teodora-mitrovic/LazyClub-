import { PROJECT_SUCCESS, PROJECT_FAILURE, PROJECT_LOADING,
         SAVE_PROJECT_SUCCESS, SAVE_PROJECT_FAILURE, SAVE_PROJECT_LOADING,
         DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, DELETE_PROJECT_LOADING  } from '../actions/projectActions.js';
import axios from 'react-native-axios';

export function project(id, token) {

    return (dispatch) => {
        dispatch(ProjectLoading(id));

        axios.get('http://192.168.0.15:8000/api/auth/projects/'+id, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+token

            }})
        .then(response => {
        dispatch(ProjectSuccess(response.data))
        })
        .catch(error => {
            dispatch(ProjectFailure(error))
        })



    } //dispatch
}

function ProjectLoading(id) {
    
    return {
        type: PROJECT_LOADING,
        id: id
    }
}

function ProjectSuccess(data) {

    return {
        type: PROJECT_SUCCESS,
        data: data
    }
}

function ProjectFailure(error) {
   
    return {
        type: PROJECT_FAILURE
    }
}


//// post 


export function saveProject(data, token) {

    return (dispatch) => {
        dispatch(SaveProjectLoading());

        axios.post('http://192.168.0.15:8000/api/auth/projects', data,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+token

            }})
        .then(response => {
        dispatch(SaveProjectSuccess(response.data))
        })
        .catch(error => {
            dispatch(SaveProjectFailure(error))
        })



    } //dispatch
}

function SaveProjectLoading() {
    
    return {
        type: SAVE_PROJECT_LOADING,
    }
}

function SaveProjectSuccess(data) {

    return {
        type: SAVE_PROJECT_SUCCESS,
        data: data
    }
}

function SaveProjectFailure(error) {
   
    return {
        type: SAVE_PROJECT_FAILURE
    }
}


///////////////delete project

export function deleteProject(id, token) {

    return (dispatch) => {
        dispatch(DeleteProjectLoading(id));

        axios({ url : 'http://192.168.0.15:8000/api/auth/projects',
                method: 'delete',
                data: {"id": id},
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : "Bearer "+token

            }})
        .then(response => {
        dispatch(DeleteProjectSuccess(response.data))
        })
        .catch(error => {
            dispatch(DeleteProjectFailure(error))
        })



    } //dispatch
}

function DeleteProjectLoading(id) {
    
    return {
        type: DELETE_PROJECT_LOADING,
        id: id
    }
}

function DeleteProjectSuccess(data) {

    return {
        type: DELETE_PROJECT_SUCCESS,
        data: data
    }
}

function DeleteProjectFailure(error) {
   
    return {
        type: DELETE_PROJECT_FAILURE
    }
}