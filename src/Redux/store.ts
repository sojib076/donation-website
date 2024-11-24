// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default: localStorage
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';

// Combine reducers
const rootReducer = combineReducers({
  auth:   authReducer,
  counter: counterReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};


// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
