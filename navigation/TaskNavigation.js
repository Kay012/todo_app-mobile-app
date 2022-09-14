import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import EditTaskScreen from '../componets/EditTaskScreen'
import HomeScreen from '../componets/HomeScreen';
import CreateTask from '../componets/CreateTask';
import SignUp from '../componets/entry/SignUp';
import SignIn from '../componets/entry/SignIn';

const TaskStackNavigator = createStackNavigator()

export const TaskNavigator = () => {
    return (

    
    <TaskStackNavigator.Navigator initialRouteName="HomeScreen">
        <TaskStackNavigator.Screen name="HomeScreen" component={Tabs} 
        
        />
        <TaskStackNavigator.Screen name="EditTaskScreen" component={EditTaskScreen} />

        <TaskStackNavigator.Screen name="CreateTask" component={CreateTask} />
        
        
    </TaskStackNavigator.Navigator>
    )
}

const TabNavigator = createMaterialBottomTabNavigator()

export const Tabs = () => {
    return(
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" size={26} />
                )
            }}
            
            listeners ={({navigation}) => ({
                tabPress: (event) => {
                    event.preventDefault();
                    navigation.navigate("HomeScreen")
                }
            })} 
            />
            <TabNavigator.Screen name="NewTask" component={CreateTask}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="pencil" size={26} />
                )
            }}
            
            listeners={({navigation}) => ({
                tabPress: (event) => {
                    event.preventDefault()
                    navigation.navigate("CreateTask")
                }
            })}/>
            <TabNavigator.Screen name="Profile" component={EditTaskScreen}
            options={{
                tabBarIcon: () => {
                    <MaterialCommunityIcons name="account-circle" size={26} />
                }
            }}
            
            listeners={({navigation}) => ({
                tabPress: (event) => {
                    event.preventDefault()
                    navigation.navigate("EditTaskScreen")
                }
            })}/>
        </TabNavigator.Navigator>
    )
}