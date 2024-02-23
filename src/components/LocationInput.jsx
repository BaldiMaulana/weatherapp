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

  const find = () =>{
    onLocationSearch(location)
  }


  return (
    <div className='flex gap-1'>
      <div className='flex gap-1'>
      <input
        type="text"
        placeholder="enter location"
        value={location}
        onChange={handleInputChange}
        onKeyPress={handleKeyInput}
        className='text-2xl rounded-xl text-start pl-4 w-[250px] sm:w-[300px]'
      />
      <button onClick={find} className='bg-blue-900 text-2xl rounded-xl border-2 border-black'>🔎</button>
      </div>
    </div>
  );
}

export default LocationInput;
