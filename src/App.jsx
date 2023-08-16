import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Result from './components/Result';

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  return (
    <div className="app bg-gray-200 h-screen overflow-auto">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-1 sm:col-span-2 bg-gray-100" />
        <div className="col-span-10 sm:col-span-8 bg-gray-50 p-4 flex flex-col gap-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]">
          <Navbar />
          <SearchBox apiResponse={apiResponse} setApiResponse={setApiResponse} />
          <Result apiResponse={apiResponse} />
        </div>
        <div className="col-span-1 sm:col-span-2 bg-gray-100" />
      </div>
    </div>
  );
}

export default App;
