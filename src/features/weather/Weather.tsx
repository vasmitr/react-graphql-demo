import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeatherData, selectWeather } from "./weatherSlice";
import styles from './Weather.module.css';
import { Units } from "../../types";
import { getUnitsSymbol } from "./helpers";

interface Props {
    city: string;
    units?: Units;
}

export function Weather (props: Props): JSX.Element {
    const dispatch = useAppDispatch()
    const {loading, weather } = useAppSelector(selectWeather);

    const {city, units = 'metric'} = props;

    useEffect(() => {
        dispatch(fetchWeatherData([city, units]))
    }, [])

    if (loading) return <div>Loading...</div> 

    return (
        <div className={styles.weather}>
            <div>
                <h3>{city}</h3>
            </div>
            <div className={styles.temperature}>
                <div>
                    <p>{ weather?.temperature.actual } { getUnitsSymbol(units)}</p>
                    <div className={styles.temperatureItems}>
                        <div>
                            <span>Feels Like: </span>
                            {
                                weather?.temperature.feelsLike
                            }
                        </div>
                        <div>
                            <span>Min: </span>
                            {
                                weather?.temperature.min
                            }
                        </div>
                        <div>
                            <span>Max: </span>
                            {
                                weather?.temperature.max
                            }
                        </div> 
                    </div>
                </div>
            </div>
            <div className={styles.otherItems}>
                <div>
                    <span>&#9729; </span>
                    <span>{weather?.clouds.all} %</span>
                </div>
                <div>
                    <span>&#9730; </span>
                    <span>{weather?.clouds.humidity} %</span>
                </div>
                <div>
                <span>&#x1F32C; </span>
                    <span>{weather?.wind.speed}</span>
                </div>
            </div>
        </div>
    )
}