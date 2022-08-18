import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { WeatherData } from "../../types";
import { fetchWeatherApi } from "./weatherApi";


export interface WeatherState {
    weather?: WeatherData;
    loading: boolean;
    error: boolean;
    success: boolean;
}

const initialState: WeatherState = {
    loading: false,
    error: false,
    success: false
};

export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async ([city, units]: Parameters<typeof fetchWeatherApi>) => {

        const response = await fetchWeatherApi(city, units);

        return response?.data?.getCityByName?.weather || {};
    }
)



export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchWeatherData.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.success = true;
            state.loading = false;
            state.weather = action.payload;
          })
          .addCase(fetchWeatherData.rejected, (state) => {
            state.loading = false;
            state.error = true;
          });
      },
    });

    export const selectWeather = (state: RootState) => state.weather;


    export default weatherSlice.reducer;