import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Favorites = ({ change }) => {
    const [list, setList] = useState([])
    const [topList, setTopList] = useState([])
    const [shortTop, setShortTop] = useState([])

    useEffect(() => {
        axios
        .get('https://jsonstorage.net/api/items/51782ff5-8fd8-49da-8cc1-0e8d784aeb96')
        .then(response => {
            const list = response.data
            setList(list.allnames)
        })
    }, [change])
    
    useEffect(() => {
        const ratedList = Object.values(list).filter(e => e.isRated === true)
        setTopList(ratedList.sort((a, b) => b.summary - a.summary))
    }, [list])

    useEffect(() => {
        setShortTop(topList.slice(0, 50))
    }, [topList])

    if (shortTop) {
        return (
            <div>
                <h3>Top 50 Rating</h3>
                <ul>
                    {shortTop.map(name => 
                        <li key={name.id}>
                           <strong>{name.name}</strong> <em>{name.gender}</em>&nbsp;&nbsp;{name.summary} <small>C{name.rating[0]} Y{name.rating[1]}</small>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Favorites;