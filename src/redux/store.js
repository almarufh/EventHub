import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
    persistStore, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER,
    persistReducer
} from 'redux-persist'
import storage from "redux-persist/es/storage";
import reducer from './slice/user.js'

const eventPersitConfig = {
    key: "event",
    storage
}


const eventReducer = combineReducers ({
    eventHub: reducer
})

const events = persistReducer(eventPersitConfig, eventReducer);


const store = configureStore({
    reducer: events,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions:[
                FLUSH, 
                REHYDRATE, 
                PAUSE, 
                PERSIST, 
                PURGE, 
                REGISTER
            ]
        }
    })
});


export const persistor = persistStore(store)

export default store