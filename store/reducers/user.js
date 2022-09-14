import {SIGNIN_USER} from '../actions/user'

const initialState = {
    
    userId: "",
    name: "",
    email: ""
}

export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case SIGNIN_USER:
            const {name, email} = action.currentUser
            return {
                ...state, userId: action.userId, name: name, email: email
            }

        default:
            return state
    }
}