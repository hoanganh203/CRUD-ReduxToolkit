import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"
import productApi, { productReducer } from '../queryApi/index';
import { cartsReducer } from '../sliceRedux/cart';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { orderReducer } from '../sliceRedux/order';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carts']
}


const rootReducer = combineReducers({
    product: productReducer,
    carts: cartsReducer,
    order: orderReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(productApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default persistStore(store);