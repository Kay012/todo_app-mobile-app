import React, {useState} from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Task from '../objects/TaskClass'
import * as TaskActions from '../store/actions/tasks'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const CreateTask = (props) => {

    // const [date, setDate] = useState(new Date().toDateString());

    // const onChange = (event, selectedDate) => {
    // const currentDate = date;
    // setDate(currentDate);
    // };

    const taskId = props.route.params? props.route.params.taskId : null

    const editedTask = useSelector(state => state.tasks.tasks.find(task => taskId === task.created))


    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <MaterialCommunityIcons name="content-save" size={26} title="Save"/>
            )
        })
    },[])
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const [title, setTitle] = useState(editedTask? editedTask.title : "");
    const [description, setDescription] = useState(editedTask? editedTask.description : "");
    const due= editedTask? editedTask.due : date.toUTCString()
    const created = editedTask? editedTask.created : new Date().toUTCString();

    const dispatch = useDispatch()
    const saveTaskHandler = (e) => {
        e.preventDefault()
        const tsk = new Task(
            title,
            description,
            due,
            created
        )
        dispatch(TaskActions.addTask(tsk))
        props.navigation.navigate("HomeScreen")
    }
    const editingTaskHandler = () => {
      
        dispatch(TaskActions.editTask(title, description, due, created))
        props.navigation.navigate("HomeScreen")
    }

    // const [tsk, setTsk] = useState(newTask)

    const onChange = (event, selectedDate) => {
        // event.preventDefault()
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    return (
        <View>
            <View style={styles.textinpt}>
                <Text>Title:</Text>
                <TextInput value={title} onChangeText={value => setTitle(value)}/>
            </View>

            <View style={styles.textinpt}>
                <Text>Description:</Text>
                <TextInput  value={description} onChangeText={value => setDescription(value)}/>
            </View>

            <View style={styles.textinpt}>
                <Text>Due:</Text>
                {/* <TextInput /> */}
                {/* <DateTimePicker
                    value="1215645"
                    onChange={onChange}
                /> */}
                {/* <DatePickerIOSComponent/> */}
                <View style={styles.dues}>
                    <TextInput value={due.slice(0,22)}/>
                    <View style={styles.pickers} >
                        <View style={styles.picker}>
                            <Button  onPress={showDatepicker} title="date!" />
                        </View>
                        <View style={styles.picker}>
                            <Button onPress={showTimepicker} title="time!" />
                        </View>
                    </View>
                    
                </View>
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
            </View>
            <View style={{padding: 30, }}>
            <Button title="Save" onPress={editedTask? editingTaskHandler : saveTaskHandler}/>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
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
      },
      textinpt: {
          borderBottomWidth: 2,
          borderBottomColor: 'black',
          margin: 15
      },
      dues: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        
      },
      pickers: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

      }
})

export default CreateTask
