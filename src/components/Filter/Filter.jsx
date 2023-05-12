import { useSelector, useDispatch } from 'react-redux';
import { getContactFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import React from 'react';

import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.filterForm}
        name="filter"
        type="text"
        value={filter}
        onChange={event =>
          dispatch(setContactFilter(event.currentTarget.value))
        }
        placeholder="Search..."
      />
    </>
  );
}
