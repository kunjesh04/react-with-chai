import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/kunjesh04')
        .then(response => response.json())
        .then(
            data => {
                setData(data)
            }
        )
    }, [])

    return (
        <div className='text-center m-4 bg-orange-700 text-white font-bold p-4 text-3xl'>
            <p className='p-8'> 
                Github Followers : {data.followers}
            </p>
            <img src={data.avatar_url} alt="Github Profile Image" width={300}/>
        </div>
    )
}

export default Github
