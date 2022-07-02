import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware"
import reducer from "./reducers"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, reducer)

const logger = createLogger()
const middlewares = applyMiddleware(rpm, logger)

export const store = createStore(persistedReducer, middlewares)
export const persistor = persistStore(store)
