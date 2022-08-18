import { ChangeEventHandler, FormEventHandler, useCallback, useState } from "react"
import { useAppDispatch } from "../../app/hooks";
import { Units } from "../../types";
import styles from './Search.module.css';
import { searchByCity } from "./searchSlice";

export function Search() {

    const dispatch = useAppDispatch();

    const [value, setValue] = useState('');
    const [option, setOption] = useState('metric');

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        setValue(event.target.value);
    }, [])

    const handleSelect: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
        setOption(event.target.value);
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(searchByCity({city: value, units: option as Units}));
    }, [value, option])

    return (
        <form onSubmit={handleSubmit} className={styles.search}>
            <input type="text" value={value} onChange={handleChange} />
            <select className={ styles.select } onChange={handleSelect} value={option}>
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <button className={ styles.button }>Search</button>
        </form>
    )
}