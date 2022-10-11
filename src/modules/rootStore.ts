import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const createStore = () => {
  const isDev = !import.meta.env.PROD;
  const reduxSaga = createSagaMiddleware();
  const middleware = [reduxSaga];

  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
  });

  reduxSaga.run(rootSaga);

  return store;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = createStore();

export default store;
