import { ChangeEventHandler, FormEventHandler, useCallback, useState } from "react"
import styles from './Search.module.css';

export function Search() {

    const [value, setValue] = useState('');
    const [option, setOption] = useState('metric');

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        setValue(event.target.value)
    }, [])

    const handleSelect: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
        setOption(event.target.value)
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(value, option);
    }, [])

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