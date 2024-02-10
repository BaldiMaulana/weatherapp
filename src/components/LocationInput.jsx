import React, { useState } from 'react';

function LocationInput({ onLocationSearch }) {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyInput = (e) => {
    if (e.key === 'Enter') {
        // Tekan tombol "Enter", lakukan pencarian
        onLocationSearch(location);
  
        // Bersihkan input setelah pencarian
        setLocation('');
      }
  };


  return (
    <div className='flex'>
      <input
        type="text"
        placeholder="enter location"
        value={location}
        onChange={handleInputChange}
        onKeyPress={handleKeyInput}
        className='text-2xl rounded-xl pl-4'
      />
      <button onClick={() => onLocationSearch(location)} className='bg-blue-900 ml-1 text-2xl p-1 rounded-xl border-2 border-black'>🔎</button>
    </div>
  );
}

export default LocationInput;
