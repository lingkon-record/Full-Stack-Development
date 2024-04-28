import React, { useState, useEffect } from 'react';
// add quran_surahs.json in public folder.


function SurahList() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    async function fetchSurahs() {
      try {
        const response = await fetch('/quran_surahs.json'); // add quran_surahs.json in public folder.
        const data = await response.json();
        setSurahs(data.quran_surahs);
      } catch (error) {
        console.error('Error fetching surahs:', error);
      }
    }

    fetchSurahs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Surah List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {surahs.map((surah) => (
          <div key={surah.surah_number} className=" rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">{surah.surah_name}</h2>
              <p className="text-base text-gray-800 mb-2">Surah Number: {surah.surah_number}</p>
              <p className="text-base text-gray-800 mb-2">Verses Count: {surah.verses_count}</p>
              <p className="text-base text-gray-800 mb-2">Revelation Order: {surah.revelation_order}</p>
              <p className="text-base text-gray-800">Revelation Place: {surah.revelation_place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SurahList;
