import React from 'react';
import styles from './WeatherDetailsContainer.module.scss';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecasts from '../Favorites/Favorites';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FavoriteCities, SelectedCity } from '../common/store';

export const WeatherDetailsContainer = () => {
    const [favorites, setFavorites] = useRecoilState(FavoriteCities);
    const currentCity = useRecoilValue(SelectedCity);

    const upsertFavorites = () => {
        const tempFavorites: string[] = [...favorites, currentCity];
        const newFavorites: string[] = favorites.length < 5 ? tempFavorites : (() => {
            tempFavorites.shift();
            return tempFavorites;
        })();
        setFavorites(newFavorites);
    }

    const deleteFromFavorites = () => {
        const withoutCurrentCity = favorites.filter(_ => _ !== currentCity);
        setFavorites(withoutCurrentCity);
    }

    return <div className={styles.container}>
        <div className={styles.favoritesButton}>
            {favorites.includes(currentCity) ? 
                <Favorite onClick={deleteFromFavorites}/>
                : <FavoriteBorder onClick={upsertFavorites}/>
            }
        </div>
        <CurrentWeather />
        <Forecasts />
    </div>
};
