import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { storeData } from '../data';
import Product from '../components/Product';

function Shop() {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [...new Set(storeData.map((item) => item.genre))];

  const handleSortChange = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  const handleGenreToggle = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((prevGenres) => prevGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres((prevGenres) => [...prevGenres, genre]);
    }
  };

  const isGenreSelected = (genre) => selectedGenres.includes(genre);

  const sortedStoreData = [...storeData]
    .filter((item) => selectedGenres.length === 0 || selectedGenres.includes(item.genre))
    .sort((a, b) => {
      const aValue = sortBy === 'name' ? a.name : a.author;
      const bValue = sortBy === 'name' ? b.name : b.author;

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:grid lg:grid-cols'>
        <div>
          <label>
            Sort by:
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value='name'>Name</option>
              <option value='author'>Author</option>
            </select>
          </label>
        </div>

        <div>
          <label>Filter by genre:</label>
          {genres.map((genre) => (
            <label key={genre}>
              <input
                type='checkbox'
                checked={isGenreSelected(genre)}
                onChange={() => handleGenreToggle(genre)}
              />
              {genre}
            </label>
          ))}
        </div>

        {sortedStoreData.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
