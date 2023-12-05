import React, { useState } from 'react';

const Authors = ({ storeData }) => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorSelect = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div className="p-4 mb-4">
      <select
        className="mb-4 p-2 rounded-md"
        onChange={(e) => handleAuthorSelect(e.target.value)}
        style={{ backgroundColor: 'white' }}
      >
        <option value={null}>Select an Author</option>
        {[...new Set(storeData.map((book) => book.author))].map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>

      <div className="mb-4">
        {selectedAuthor ? (
          <>
            <h2 className="text-lg font-semibold">{selectedAuthor}'s Books:</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {storeData
                .filter((book) => book.author === selectedAuthor)
                .map((book) => (
                  <li key={book.productId} className="bg-white p-4 rounded-md mb-4">
                    <div className="flex flex-col items-center">
                      <img src={book.image} className="h-80 object-cover" alt={book.name} />
                    </div>
                    <p className="mt-2 text-lg text-center font-semibold">{book.name}</p>
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <div>
            <h2 className="text-lg font-semibold">All Books:</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {storeData.map((book) => (
                <li key={book.productId} className="bg-white p-4 rounded-md mb-4">
                  <div className="flex flex-col items-center  h-auto">
                    <img src={book.image} className="h-80 object-cover" alt={book.name} />
                  </div>


                  <p className="mt-2 text-lg text-center font-semibold">{book.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authors;
