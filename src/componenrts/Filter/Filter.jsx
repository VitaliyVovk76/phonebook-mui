import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { changeFilter } from '../../redux/filter/filter-slice';
import selectorsFilter from '../../redux/filter/filter-selectors';

const Filter = () => {
  const value = useSelector(selectorsFilter.getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <CssBaseline />
      <Typography variant="h5" sx={{ my: 2, textAlign: 'center' }}>
        Find contacts by name
      </Typography>
      <div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="text"
          label="Enter the contact name"
          variant="standard"
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
          autoFocus
        />
      </div>
    </>
  );
};

export default Filter;
