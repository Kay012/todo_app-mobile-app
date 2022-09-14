import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Tasks from './tasks/Tasks';
import { useSelector, useDispatch } from 'react-redux';
import * as taskActions from './../store/actions/tasks'
const HomeScreen = (props) => {

  const userId = useSelector(state => state.userState.userId)
  
  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()
  useEffect(() => {
      // (async () => {
          console.log("fetchin")
          {userId && dispatch(taskActions.fetchTasks())}
          console.log("done fetchin")
      // })
  }, [])

  
  console.log(tasks)
    return (
      <View style={styles.container}>
        <Tasks tasks={tasks} navigation={props.navigation}/>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.actions}>
          <Button style={styles.btn} title='Edit'  onPress={() =>props.navigation.navigate('EditTaskScreen')}/>
          <Text>Amen</Text>
          <Button style={styles.btn} title='home'  onPress={() => props.navigation.navigate('HomeScreen')} />
        </View>
  
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      borderColor: "red",
      borderWidth: 2,
      flex: 1,
      // backgroundColor: '#fff',
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actions: {
      borderColor: "gray",
      borderWidth: 2,
      // display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5
    },
    btn : {
      flex: 1,
      padding: 10,
      // color:'red',
      width: 20,
      height: 4,
      // accessibilityLabel:"Learn more about this purple button",
      color:"black",
      borderBottomColor: 'yellow',
    }
  });
  

export default HomeScreen
