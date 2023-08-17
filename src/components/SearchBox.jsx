import React, { useContext } from 'react';
import AppContext from '../AppContext';

const SearchBox = ({ apiResponse, setApiResponse }) => {
    const { setSelectedInformation } = useContext(AppContext);
    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
            const data = await response.json();
            setApiResponse(data);
            setSelectedInformation(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='w-full p-2 border-2 border-gray-300 text-gray-700 rounded-lg flex gap-2 items-center'>
            <img src="https://www.freeiconspng.com/uploads/search-icon-png-4.png" alt="" className='w-4 h-fit' />
            <input
                type="search"
                name="data"
                className='bg-transparent flex-1 outline-none'
                placeholder='Enter the word to be searched'
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(e.target.value);
                    }
                }}
            />
        </div>
    );
}

export default SearchBox;
