import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AppContext from './AppContext';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SelectedInfo from './pages/Selected';

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedInformation, setSelectedInformation] = useState([]);

  return (
    <AppContext.Provider value={{ selectedInformation, setSelectedInformation }}>
      <div className="app bg-gray-200 h-screen overflow-auto">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-1 sm:col-span-2" />
          <div className="col-span-10 sm:col-span-8 my-5 bg-gray-50 p-4 flex flex-col gap-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage apiResponse={apiResponse} setApiResponse={setApiResponse} />} />
              <Route path="/selected" element={<SelectedInfo />} />
            </Routes>
          </div>
          <div className="col-span-1 sm:col-span-2" />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
