import isEmpty from 'lodash/isEmpty';
import { useAppSelector } from "../../app/hooks";
import { selectWeather } from "./weatherSlice";
import styles from './Weather.module.css';
import { getUnitsSymbol } from "./helpers";
import { selectSearch } from "../search/searchSlice";

export function Weather (): JSX.Element {
    const {loading, weather } = useAppSelector(selectWeather);

    const {city, units = 'metric'} = useAppSelector(selectSearch);

    if (loading) return <div className={styles.message}>Loading...</div> 

    if(isEmpty(weather)) {
        return <div className={styles.message}>No Results. Please try again...</div>
    }

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