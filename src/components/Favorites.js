import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Favorites = ({ change }) => {
    const [list, setList] = useState([])
    const [topList, setTopList] = useState([])
    const [shortTop, setShortTop] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:3001/allnames')
        .then(response => {
            setList(response.data)
        })
    }, [change])

    useEffect(() => {
        const ratedList = list.filter(e => e.isRated === true)
        setTopList(ratedList.sort((a, b) => b.summary - a.summary))
    }, [list])

    console.log(topList)

    useEffect(() => {
        setShortTop(topList.slice(0, 20))
    }, [topList])

    if (shortTop) {
        return (
            <div>
                <h3>Top Rating (first 20)</h3>
                <ul>
                    {shortTop.map(name => 
                        <li key={name.id}>
                           <strong>{name.name}</strong> <em>{name.gender}</em> Rating: {name.summary} <small>C{name.rating[0]} Y{name.rating[1]}</small>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Favorites;