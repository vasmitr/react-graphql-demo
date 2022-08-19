import isEmpty from 'lodash/isEmpty';
import { useAppSelector } from "../../app/hooks";
import { selectWeather } from "./weatherSlice";
import styles from './Weather.module.css';
import { getClouds, getUnitsSymbol, getWindDirection } from "./helpers";
import { selectSearch } from "../search/searchSlice";

export function Weather (): JSX.Element {
    const {loading, weather } = useAppSelector(selectWeather);

    const {city, units = 'metric'} = useAppSelector(selectSearch);

    if (loading) return <div className={styles.message}>Loading...</div> 

    if(isEmpty(weather)) {
        return <div className={styles.message}>No Results. Please try again...</div>
    }

    const [cloudsIcon, cloudsText] = getClouds(weather?.clouds.all);

    return (
        <div className={styles.weather}>
            <div>
                <h3>{city}</h3>
                <div>
                    <span>{cloudsIcon} </span>
                    <span>{cloudsText}</span>
                </div>
            </div>
            <div className={styles.temperature}>
                <div>
                    <p>&#x1F321; { weather?.temperature.actual } { getUnitsSymbol(units)}</p>
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
                    <span>&#x1F4A7; </span>
                    <span>{weather?.clouds.humidity} %</span>
                </div>
                <div>
                    <span>&#128065; </span>
                    <span>{weather?.clouds.visibility} M</span>
                </div>
                <div>
                <span>&#x1F4A8; </span>
                    <span>{weather?.wind.speed} M/S </span>
                    <span>{getWindDirection(weather.wind.deg)}</span>
                </div>
            </div>
        </div>
    )
}