import React, {useState} from 'react'
import { Button, TextInput, View, Text, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import * as userActions from '../../store/actions/user'
const SignIn = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    const onSignIn = async() => {
        
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
            await dispatch(userActions.signIn(email, password))

        }catch(err){
            console.log(err)
        }
        props.navigation.navigate("HomeScreen")
    }

    return (
        <View>
            <Text>Sign In</Text>
            <View>
                <TextInput onChangeText={(email) => setEmail(email)} placeholder="Email..."/>
                <TextInput onChangeText={(password) => setPassword(password)} placeholder="Password..."/>
            </View>
            <Button title="Save" onPress={onSignIn}/>
            
        </View>
    )
}

export default SignIn
