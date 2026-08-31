import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";

import eventsReducer from "./slice/events.js";
import categoryReducer from "./slice/category.js";
import discussionsReducer from "./slice/discussions.js";
import communitiesReducer from "./slice/communities.js";
import usersReducer from "./slice/users.js";
import userReducer from "./slice/user.js";
import authReducer from "./slice/auth.js";

const eventsPersistConfig = { 
    key: "events", 
    storage,
    whitelist: ["data"]
};

const categoryPersistConfig = { 
    key: "category", 
    storage,
    whitelist: ["data"]
};

const discussionsPersistConfig = { 
    key: "discussions", 
    storage,
    whitelist: ["data"]
};

const communitiesPersistConfig = { 
    key: "communities", 
    storage,
    whitelist: ["data"]
};

const usersPersistConfig = { 
    key: "users", 
    storage,
    whitelist: ["data"]
};

const userPersistConfig = { 
    key: "user", 
    storage,
    whitelist: ["data"]
};

const authPersistConfig = { 
    key: "auth", 
    storage,
    whitelist: ["actived", "user"]
};

const store = configureStore({
    reducer: {
        events: persistReducer(eventsPersistConfig, eventsReducer),
        categorys: persistReducer(categoryPersistConfig, categoryReducer),
        discussions: persistReducer(discussionsPersistConfig, discussionsReducer),
        communities: persistReducer(communitiesPersistConfig, communitiesReducer),
        users: persistReducer(usersPersistConfig, usersReducer),
        eventHub: persistReducer(userPersistConfig, userReducer),
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH, 
                    REHYDRATE, 
                    PAUSE, 
                    PERSIST, 
                    PURGE, 
                    REGISTER
                ],
            },
        }),
    devTools: true,
});

export const persistor = persistStore(store);

export default store;