import React from 'react'
import SearchBox from '../components/SearchBox'
import Result from '../components/Result'

const HomePage = ({ apiResponse, setApiResponse }) => {
    return (
        <>
            <SearchBox apiResponse={apiResponse} setApiResponse={setApiResponse} />
            <Result apiResponse={apiResponse} />
        </>
    )
}

export default HomePage