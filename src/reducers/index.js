import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';
import UsersReducer from './UsersReducer';

import EventReducer from './EventReducer';
import EventsReducer from './EventsReducer';
import ProjectReducer from './ProjectReducer';
import ProjectsReducer from './ProjectsReducer';
import SaveEventReducer from './SaveEventReducer';
import SaveUserReducer from './SaveUserReducer';
import SaveProjectReducer from './SaveProjectReducer';
import DeleteUserReducer from './DeleteUserReducer';
import DeleteProjectReducer from './DeleteProjectReducer';
import DeleteEventReducer from './DeleteEventReducer';
import HomeReducer from './HomeReducer';
import LogoutReducer from './LogoutReducer';




const appReducer = combineReducers({
  LoginReducer,
  UserReducer,
  UsersReducer,
  EventReducer,
  ProjectReducer,
  ProjectsReducer,
  EventsReducer,
  HomeReducer,
  SaveEventReducer,
  SaveUserReducer,
  SaveProjectReducer,
  DeleteUserReducer,
  DeleteProjectReducer,
  DeleteEventReducer,
  LogoutReducer

});

const rootReducer = (state, action) => {
	return appReducer(state, action);
}

const logger = createLogger();

export default createStore (rootReducer, compose(applyMiddleware(thunk, logger)));

