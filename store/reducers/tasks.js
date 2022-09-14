import TaskItem from '../../componets/tasks/TaskItem'
import Task from '../../objects/TaskClass'
import {FETCH_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK} from '../actions/tasks'
const initialState = {
    tasks: []
}

export const tasksReducer = (state=initialState, action) => {
    switch(action.type){

        case FETCH_TASKS: 
            return {...state, tasks: action.tasks}

        case ADD_TASK:
            return {...state, tasks: state.tasks.concat(action.task)}
            
        case DELETE_TASK: 
        return { ...state, tasks: state.tasks.filter(task => task.created !== action.taskId)}

        case EDIT_TASK:
            const taskIndex = state.tasks.findIndex(task => task.created === action.taskId)


            const editedTask = new Task(
                action.title,
                action.description,
                action.due,
                action.taskId
            )
            console.log(editedTask)
            const updatedAvailableTasks = [...state.tasks]
            updatedAvailableTasks[taskIndex] = editedTask

            console.log(updatedAvailableTasks)
            return {
                ...state, tasks: updatedAvailableTasks
            }
    }
    return state
}

