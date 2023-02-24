import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filtersSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInputChange = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        value={filter}
        onChange={onInputChange}
        className={css.input}
      />
    </label>
  );
};

export default Filter;
