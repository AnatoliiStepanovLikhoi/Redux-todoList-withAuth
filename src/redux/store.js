import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import { filtersReducer } from './filterSlice';
import { tasksReducer } from './tasks/tasksSlice';
// import {authReducer} from ''

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

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
