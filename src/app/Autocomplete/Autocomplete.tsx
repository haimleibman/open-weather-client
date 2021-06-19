import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSetRecoilState } from 'recoil';
import { SelectedCity } from '../common/store';
import styles from './Autocomplete.module.scss';

export default function CustomAutocomplete() {
  const cities: string[] = [
    'London', 'Tel Aviv', 'New York', 'Toronto', 'Jerusalem', 'Paris', 'Kopenhagen', 'Moscow', 'Los Angeles', 'Okinawa'
  ];

  const [open, setOpen] = useState(false);
  const setSelectedCity = useSetRecoilState(SelectedCity);

  const getSelected = (option: string, value: string) => {
    setSelectedCity(option);
    return option === value;
  }

  return (
    <Autocomplete
      className={styles.autocomplete}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={getSelected}
      options={cities}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search a city"
          variant="filled"
          InputProps={{
            ...params.InputProps
          }}
        />
      )}
    />
  );
}