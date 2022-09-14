import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Provider, useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import AppNavigator from './navigation/AppNavigator';
import { tasksReducer } from './store/reducers/tasks';
import firebase from 'firebase'
import SignUp from './componets/entry/SignUp';
import SignIn from './componets/entry/SignIn';
import { userReducer } from './store/reducers/user';

import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGE_SENDER_ID,APP_ID, MEASUREMENT_ID} from './env_variables/secrets'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
  userState: userReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))


export default function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //     // (async () => {
  //         dispatch(taskActions.fetchTasks())
  //     // })
  // },[])
  return (
    <Provider store={store}>
      {/* <SignUp/> */}
      {/* <SignIn /> */}
    < AppNavigator />
    </Provider>
  );
}
