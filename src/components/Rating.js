import React, { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = "https://jsonstorage.net/"

const optionAxios = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
}

const Rating = ({ actualname, user, all }) => {
    const [isRated, setIsRated] = useState(false)
    const [tosend, setTosend] = useState()
    
    console.log(all)

    const clickHandler = (rating) => {
        const existingObject = actualname
        const id = existingObject.id -1

        if (user === 'carmen') {
            all.allnames[id].rating[0] = rating
            const total = all.allnames[id].rating[0] + all.allnames[id].rating[1]
            all.allnames[id].summary = total
            all.allnames[id].isRated = true
            setTosend(all)
            console.log(all.allnames[id])
            setIsRated(true)
        } else if (user === 'yves') {
            all.allnames[id].rating[1] = rating
            const total = all.allnames[id].rating[0] + all.allnames[id].rating[1]
            all.allnames[id].summary = total
            all.allnames[id].isRated = true
            setTosend(all)
            console.log(all.allnames[id])
            setIsRated(true)
        } 
    }

    useEffect(() => {
        axios.put(`api/items/51782ff5-8fd8-49da-8cc1-0e8d784aeb96`, tosend, optionAxios)
    })

    useEffect(() => setIsRated(false), [actualname])

    if (!isRated && actualname) {
        return(
            <div>
                <p>Rating</p>
                <button onClick={() => clickHandler(1)}>1</button>
                <button onClick={() => clickHandler(2)}>2</button>
                <button onClick={() => clickHandler(3)}>3</button>
                <button onClick={() => clickHandler(4)}>4</button>
                <button onClick={() => clickHandler(5)}>5</button>
                <button onClick={() => clickHandler(6)}>6</button>
                <button onClick={() => clickHandler(7)}>7</button>
                <button onClick={() => clickHandler(8)}>8</button>
                <button onClick={() => clickHandler(9)}>9</button>
                <button onClick={() => clickHandler(10)}>10</button>
            </div>
        )
    } else if (!actualname) {
        return(
            <div>
                <p>Click to get a name</p>
            </div>
        )
    }
    else {
        return(
            <div>
                <p>Rating done</p>
            </div>
        )
    }    
}

export default Rating

