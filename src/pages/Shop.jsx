// Shop.js
import React, { useState } from 'react';
import { storeData } from '../data';
import Product from '../components/Product';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

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
    <div className="container mx-auto p-4 mt-8 flex flex-col lg:flex-row">
      {/* Filters on top for mobile view */}
      <div className="w-full lg:w-1/4 lg:pr-8">
        <div>
          <label className="block font-semibold mb-2">Sort by:</label>
          <select
            className="border p-2 rounded w-full"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="author">Author</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2">Filter by genre:</label>
          {genres.map((genre) => (
            <label key={genre} className="block mb-2">
              <input
                type="checkbox"
                checked={isGenreSelected(genre)}
                onChange={() => handleGenreToggle(genre)}
                className="mr-2"
              />
              {genre}
            </label>
          ))}
        </div>
      </div>

      {/* Product results under filters */}
      <div className="w-full lg:w-3/4 mt-4 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedStoreData.map((item, i) => (
            <Product key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
