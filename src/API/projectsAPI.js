import { PROJECTS_SUCCESS, PROJECTS_FAILURE, PROJECTS_LOADING } from '../actions/projectsActions.js';
import axios from 'react-native-axios';

export function projects(token) {

    return (dispatch) => {
        dispatch(ProjectsLoading());

        axios.get('http://192.168.0.15:8000/api/auth/projects', 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization" : "Bearer "+token

                }})
        .then(response => {
        dispatch(ProjectsSuccess(response.data))
        })
        .catch(error => {
            dispatch(ProjectsFailure(error))
        })



    } //dispatch
}

function ProjectsLoading() {
    
    return {
        type: PROJECTS_LOADING,
        isLoading: true
        
    }
}

function ProjectsSuccess(data) {

    return {
        type: PROJECTS_SUCCESS,
        data: data,
        isLoading: false
    }
}

function ProjectsFailure(error) {
   
    return {
        type: PROJECTS_FAILURE,
        isLoading: false

    }
}