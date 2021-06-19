import React from 'react';
import styles from './Layout.module.scss';
import AsyncAutocomplete from '../Autocomplete/Autocomplete';
import { WeatherDetailsContainer } from '../WeatherDetailsContainer/WeatherDetailsContainer';

const Layout = () => {
    return <div className={styles.root}>
                <div className={styles.body}>
                    <AsyncAutocomplete/>
                    <WeatherDetailsContainer/>
                </div>
            </div>
}

export default Layout;