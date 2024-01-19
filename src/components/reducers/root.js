import persistReducer from "redux-persist/es/persistReducer"
import userSlice from "./Slice/userSlice"
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage";




const userConfig = {
    key: "user",
    version: 1,
    storage,
    whitelist: ["currentUser"],
}

const presistUserReducer = persistReducer(userConfig,userSlice)

const root = combineReducers({
    user : presistUserReducer,
})

export default root