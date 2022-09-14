import React, {useState} from 'react'
import { Button, TextInput, View, Text, Alert } from 'react-native'
import firebase from 'firebase'
const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSignUp = async() => {
        if (!name.trim()) {
            Alert.alert("Please enter your name", "You need to enter your name!", [
                {text: "Ok"}
            ])
            return;
        }
        if (!email.trim()) {
            Alert.alert("Please enter your email", "You need to enter your email!", [
                {text: "Ok"}
            ])
            return;
        }
        if (!password.trim()) {
            Alert.alert("Please enter your password", "You need to enter your password!", [
                {text: "Ok"}
            ])
            return;
        }
        try {
            const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({name, email})

            console.log("Success")

        }catch(err){
            console.log(err)
        }

    }

    return (
        <View>
            <Text>Sign up</Text>
            <View>
                <TextInput onChangeText={(name) => setName(name)} placeholder="Name..."/>
                <TextInput onChangeText={(email) => setEmail(email)} placeholder="Email..."/>
                <TextInput onChangeText={(password) => setPassword(password)} placeholder="Password..."/>
            </View>
            <Button title="Save" onPress={onSignUp}/>
            
        </View>
    )
}

export default SignUp
