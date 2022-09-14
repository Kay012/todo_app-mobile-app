import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TaskNavigator } from './TaskNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import * as taskActions from '../store/actions/tasks'
import { useDispatch, useSelector } from 'react-redux';
import SignIn from '../componets/entry/SignIn';

const AuthStackNavigator = createStackNavigator()
const AppNavigator = (props) => {
    const userId = useSelector(state => state.userState.userId)


    return (
        <NavigationContainer>

            { userId ?
                <TaskNavigator />
                :
                <AuthStackNavigator.Navigator>
                {/* <TaskStackNavigator.Screen name="SignUpScreen" component={SignUp} /> */}
                    <AuthStackNavigator.Screen name="SignInScreen" component={SignIn} />
                </AuthStackNavigator.Navigator>
            }
        </NavigationContainer>
    )
}

export default AppNavigator
