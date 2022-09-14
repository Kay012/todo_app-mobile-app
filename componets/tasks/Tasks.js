import React from 'react'
import { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'


const Tasks = ({navigation, tasks}) => {
    
    return (
        <ScrollView
        >
            {/* <Flatlist data={} keyExtractor={} renderItem={ itemData => {}}>
                
            </Flatlist> */}
            {/* <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/> */}

            <FlatList
            data={tasks}
            renderItem={itemData => 
                <TaskItem navigation={navigation} title={itemData.item.title} 
                description={itemData.item.description} 
                due={itemData.item.due} 
                created={itemData.item.created}/>
            }
             />
        </ScrollView>
    )
}

export default Tasks
