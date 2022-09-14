export const SIGNUP_USER ="SIGNUP_USER"
export const SIGNIN_USER ="SIGNIN_USER"
import firebase from 'firebase'

export const signUp = (name, email, password) => {
    return async (dispatch) => {
        try{
            const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password)

            await firebase.firestore().collection("user").doc(firebase.auth().currentUser.uid).set({name, email})
            console.log("Signed up successfully")
        }catch(err){
            console.log(err)
        }
        

        await signIn(email, password)
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        let userId = "";
        let snapshot = "";
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            snapshot = await firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
            userId = await firebase.auth().currentUser.uid

        }catch(err){
            console.log(err)
        }
        console.log(snapshot.data())
        console.log(userId)
        dispatch({type: SIGNIN_USER, userId: userId, currentUser: snapshot.data()})
    }
}