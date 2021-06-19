import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectedCity } from '../common/store';
import Axios from 'axios';
import { WEATHER_API_URL_BASE, WEATHER_URL_SUFFIX } from '../staticStore';
import { CityWeatherDetails } from '../models/cityWeatherDetails';
import styles from './CurrentWeather.module.scss';
import { getHeatColor } from '../common/heatMap';

const CurrentWeather = () => {
    const [presentCity, setPresentCity] = useState<CityWeatherDetails>();
    const city = useRecoilValue(SelectedCity);

    useEffect((): void => {
        (async () => {
            const {data} = await Axios.get<CityWeatherDetails>(WEATHER_API_URL_BASE + city + WEATHER_URL_SUFFIX);
            setPresentCity(data);
        })()
    }, [city])

    return <div className={styles.currentWeather} style={{border: getHeatColor(presentCity?.main.temp ?? 0)}}>
        <div className={styles.city}>{city}</div>
        <div className={styles.degree}>{presentCity?.main.temp.toFixed()} c</div>
        <div className={styles.description}>{presentCity?.weather[0].description}</div>
    </div>
};

export default CurrentWeather;
