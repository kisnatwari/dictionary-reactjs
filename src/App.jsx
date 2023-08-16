import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [activeTab, setActiveTab] = useState('noun'); // Default to 'noun'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app bg-gray-200 h-screen overflow-auto">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-1 sm:col-span-2 bg-gray-100" />
        <div className="col-span-10 sm:col-span-8 bg-gray-50 p-4 flex flex-col gap-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]">
          <Navbar />
          <SearchBox apiResponse={apiResponse} setApiResponse={setApiResponse} />
          <div>
            {apiResponse.length === 0 ? (
              <p className="text-center">Type a word above to get its meaning.</p>
            ) : (
              <div>
                <div className="flex gap-4 text-sm">
                  <button
                    className={`tab-button px-3 py-1 rounded ${activeTab === 'noun' ? 'active-tab text-gray-300 bg-gray-800' : ' bg-gray-200 text-gray-800'}`}
                    onClick={() => handleTabChange('noun')}
                  >
                    Noun
                  </button>
                  <button
                    className={`tab-button px-3 py-1 rounded ${activeTab === 'verb' ? 'active-tab text-gray-300 bg-gray-800' : ' bg-gray-200 text-gray-800'}`}
                    onClick={() => handleTabChange('verb')}
                  >
                    Verb
                  </button>
                </div>
                <div className="mt-4">
                  {apiResponse.map((entry, index) => (
                    <div key={index}>
                      {entry.meanings.map((meaning, meaningIndex) => (
                        <div key={meaningIndex}>
                          {meaning.partOfSpeech === activeTab && (
                            <div>
                              <h3 className="text-lg font-semibold capitalize">{meaning.partOfSpeech}</h3>
                              <ul className="list-disc pl-6">
                                {meaning.definitions.map((def, defIndex) => (
                                  <li key={defIndex}>{def.definition}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 bg-gray-100" />
      </div>
    </div>
  );
}

export default App;
