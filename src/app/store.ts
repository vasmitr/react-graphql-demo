import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
