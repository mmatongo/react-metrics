import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, handler }) => (
  <div className="search">
    {' Search by Death count: '}
    <input
      type="number"
      id="deaths"
      name="deaths"
      value={value}
      onChange={handler}
    />
  </div>
);

Search.propTypes = ({
  value: PropTypes.number,
  handler: PropTypes.func,
}).isRequired;

export default Search;
