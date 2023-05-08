import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter-slice';
import selectorsFilter from '../../redux/filter/filter-selectors';

const Filter = () => {
  const value = useSelector(selectorsFilter.getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Find contacts by name</h2>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Enter the contact name"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </>
  );
};

export default Filter;
