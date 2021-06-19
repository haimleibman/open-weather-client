import React from 'react';
import styles from './FavoriteCity.module.scss';
import { CityWeatherDetails } from '../models/cityWeatherDetails';
import { getHeatColor } from '../common/heatMap';

const DayWeather = (props: {city: CityWeatherDetails}) => {
    const city = props.city;

    return <div className={styles.favoriteCity} style={{border: getHeatColor(city?.main.temp ?? 0)}}>
        <div className={styles.city}>{city?.name}</div>
        <div className={styles.degree}>{city?.main.temp.toFixed()} c</div>
        <div className={styles.description}>{city?.weather[0].main}</div>
    </div>
}

export default DayWeather;