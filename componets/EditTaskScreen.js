import React from 'react'
import { View, Text, Button } from 'react-native'

const EditTaskScreen = (props) => {
    return (
        <View>
            <Text>Edit Task</Text>
            <Button title='home'  onPress={() => props.navigation.navigate('HomeScreen')} />
        </View>
    )
}

export default EditTaskScreen
