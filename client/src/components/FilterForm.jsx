// src/components/FilterForm.js
import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    end_year: '',
    sector: '',
    topic: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filter-form">
      <label>
        End Year:
        <input
          type="text"
          name="end_year"
          value={filters.end_year}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Sector:
        <input
          type="text"
          name="sector"
          value={filters.sector}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Topic:
        <input
          type="text"
          name="topic"
          value={filters.topic}
          onChange={handleFilterChange}
        />
      </label>
      {/* Add more input fields for other filters */}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterForm;
