import React from 'react'
import { useState } from 'react'
import { Button, View, Text, StyleSheet, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as TaskActions from '../../store/actions/tasks'

const TaskItem = (props) => {

    const myTasks= useSelector(state => state.tasks.tasks)
    const [showOptions, setShowOptions] = useState(false)
    let info = "Do it with no rush, compare prices. Then take yourself for some swimming\.\
    Do it with no rush, compare prices. Then take yourself for some swimming\.\
    Do it with no rush, compare prices. Then take yourself for some swimming\.\ "

    const [showDetails, setShowDetails] = useState(false)
    const dispatch = useDispatch()
    const deleteTaskHandler = () => { 
        Alert.alert("Are you sure?", "Delete task?", [
        {text: "No", style: 'default'},
        {text: "Yes", style: 'destructive'}
        ])

        dispatch(TaskActions.deleteTask(props.created))
    }

    const editTaskHandler = () => { 
        props.navigation.navigate("CreateTask", {taskId: props.created})
    }


    return (
        <View style={styles.task}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.top__left}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.title}</Text>
                        <Text style={{color: 'gray'}}>{props.due}</Text>
                    </View>
                    <View style={styles.top__right}>
                        
                        {showOptions?
                            <View style={styles.options}>
                                <View style={{display: 'flex', alignItems: 'flex-end'}}>
                                    <Text style={{color: 'red'}} onPress={() => {setShowOptions(!showOptions)}}>X</Text>
                                </View>
                                <Text onPress={editTaskHandler} style={{paddingTop: 9, color: 'lightseagreen'}}>Edit</Text>
                                <Text style={{paddingTop: 9, color: 'lightseagreen'}} onPress={deleteTaskHandler}>Delete</Text>
                                {/* <Button style={{paddingTop: 9, color: 'lightseagreen'}} onPress={() => {deleteTaskHandler}}>Delete</Button> */}
                            </View>
                            : 
                            <Button style={{backgroundColor: 'white'}} title="' ' '" onPress={() => {setShowOptions(!showOptions)}}/>
                        }
                    </View>

                </View>
                
                
                <View style={styles.body}>
                    {showDetails?
                    <Text>
                        {props.description}
                    </Text>
                    :
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{flex: 1}}>
                        {props.description}
                    </Text>
                    }
                </View>



                <View style={styles.bottom}>
                    <View style={styles.actions}>
                        <Button title={showDetails? "Hide Details" :"Show Details"} onPress={() => {setShowDetails(!showDetails)}}/>
                        {/* <Button title="Edit"/>
                        <Button title="Delete"/> */}
                    </View>
                    <Text style={{color: 'gray'}}>{props.created}</Text>

                </View>
            
            </View>            
        </View>
    )
    
}

const styles =StyleSheet.create({
    task: {
        borderRadius: 20,
        borderTopEndRadius: 0,
        borderColor: 'black',
        // borderWidth: 2,
        backgroundColor: 'white',
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 10,
        // elevation: 10,
        padding: 15,
        margin: 10,
        marginBottom: 35,
        marginTop: 20
    },
    container: {
        borderColor: "gray",
        // borderWidth: 1,
        borderRadius: 20,
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: {width: 0, height: 2},
        // shadowRadius: 10,
        // elevation: 2,
        // padding: 15
    },
    top:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    top__right: {
        height: 80,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    options: {
        
        backgroundColor: 'lightgray',
        height: '99%',
        width: 75,
        right: 0,
        top: 0,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
    }
})

export default TaskItem
