export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const FETCH_TASKS = "FETCH_TASKS"
import firebase from 'firebase'


export const addTask = (task) => {
    return async (dispatch, getState) => {
        const {userId} = getState().userState
        try{
            const newTask = await firebase.firestore().collection("tasks").doc(userId).collection("userTasks").add({...task, firebaseCreation: firebase.firestore.FieldValue.serverTimestamp()})
            console.log("Task added successfully")
        }catch(err){

        }
        dispatch({type: ADD_TASK, task:task})
    }
}

export const fetchTasks = () => {
    return async (dispatch, getState) => {
        const {userId} = getState().userState
        console.log("here")
        console.log(userId)
        let snapshot;
        let usertasks
        try{
            snapshot = await firebase.firestore().collection("tasks").doc(userId).collection("userTasks").get()
            // console.log(snapshot.docs())
            console.log(snapshot.docs)
            usertasks = snapshot.docs.map(doc => {
                const data = doc.data()
                return {...data}
            })
        }catch(err){
            console.log(err)
        }

        dispatch({type: FETCH_TASKS, tasks: usertasks})
    }
}

export const deleteTask = (created) => {
    return async (dispatch, getState) =>{
        const {userId} = getState().userState
        try{
            console.log("deleteting")
            const deleter = await firebase.firestore().collection("tasks").doc(userId).collection("userTasks").where("created", "==", created).get()
            deleter.forEach((doc) => {
                doc.ref.delete()
            })
            console.log("deleted", deleter)
        }catch(err){
            console.log(err)
        }
        
        dispatch({type: DELETE_TASK, taskId: created})
    }
}

export const editTask = (title, description, due, created) => {
    return async (dispatch, getState) =>{
        const {userId} = getState().userState

        // const updatedTitle =
        try{
            const editor = await firebase.firestore().collection("tasks").doc(userId).collection("userTasks").where("created", "==", created).get()
            // const editor =    await firebase.firestore().collection("tasks").doc(userId).collection("userTasks").where("created", "==", created).get()
            editor.forEach(doc => {
                doc.ref.update({title, description, due})
            })
        }catch(err){
            console.log(err)
        }
        dispatch({type: EDIT_TASK, taskId: created, title: title, description: description, due: due})
    }
}