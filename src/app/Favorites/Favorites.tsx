import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { FavoriteCities } from '../common/store';
import FavoriteCity from '../FavoriteCity/FavoriteCity';
import { CityWeatherDetails } from '../models/cityWeatherDetails';
import { WEATHER_API_URL_BASE, WEATHER_URL_SUFFIX } from '../staticStore';
import styles from './Favorites.module.scss';

const Forecasts = () => {
    const [citiesDetails, setCitiesDetails] = useState<CityWeatherDetails[]>();
    const favoriteCities = useRecoilValue(FavoriteCities);

    useEffect((): void => {
        (async () => {
            const detailsPromises = favoriteCities.map(async city => {
                const {data} = await Axios.get<CityWeatherDetails>(WEATHER_API_URL_BASE + city + WEATHER_URL_SUFFIX);
                return data;
            });

            const details = await Promise.all(detailsPromises);
            setCitiesDetails(details);
        })();
    }, [favoriteCities])

    const byTemperature = (a: CityWeatherDetails, b: CityWeatherDetails): number => {
        return a.main.temp > b.main.temp ? 1
                : a.main.temp < b.main.temp ? -1
                : 0;
    }

  return <div className={styles.favorites}>
        {
            citiesDetails?.sort(byTemperature).map((city: CityWeatherDetails, i: number) => {
                return <FavoriteCity key={i} city={city} /> 
            })
        }
    </div> 
}

export default Forecasts;