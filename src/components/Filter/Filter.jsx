import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import React from 'react';

import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  return (
    <>
      <input
        className={css.filterForm}
        name="filter"
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
        placeholder="Search..."
      />
    </>
  );
}
