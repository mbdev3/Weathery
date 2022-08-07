import React, { useState, useEffect } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { options } from '../utils/api.js';

import Wrapper from '../assets/Wrappers/Search[SC].js';
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city, id) => {
            return {
              value: [city.latitude, city.longitude],
              name: city.city,
              region: city.region,
              country: city.country,
              label: `${city.city}, ${city.region}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <Wrapper>
      <AsyncPaginate
        placeholder='Search for a city...'
        debounceTimeout={1000}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </Wrapper>
  );
};

export default Search;
