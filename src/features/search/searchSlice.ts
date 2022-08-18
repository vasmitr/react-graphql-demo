import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SearchParams, Units } from "../../types";
import { fetchWeatherData } from "../weather/weatherSlice";


interface SearchState {
    city: string;
    units: Units;
}

const initialState: SearchState = {
    city: '',
    units: 'metric'
}

export const searchByCity = createAsyncThunk(
    'search/byCity',
    async ({city, units}: SearchParams, { dispatch }) => {
        dispatch(searchSlice.actions.setData({ city, units }))
        return dispatch(fetchWeatherData({city, units}));
    }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setData(state, action) {
            state.city = action.payload.city;
            state.units = action.payload.units;
        }
    }
})

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;