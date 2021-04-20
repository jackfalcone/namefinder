import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Rating = ({ actualname, user }) => {
    const [isRated, setIsRated] = useState(false)
    
    const clickHandler = (rating) => {
        const existingObject = actualname
        const id = existingObject.id
        if (user === 'carmen') {
            const existingRating = existingObject.rating[1]
            const newObject = { ...existingObject, rating: [rating, existingRating] }
            const total = newObject.rating[0] + newObject.rating[1]
            const changedObject = { ...newObject, summary: total, isRated: true}
            console.log(changedObject)
            axios.put(`http://localhost:3001/allnames/${id}`, changedObject) 
            setIsRated(true)
        } else if (user === 'yves') {
            const existingRating = existingObject.rating[0]
            const newObject = { ...existingObject, rating: [existingRating, rating] }
            const total = newObject.rating[0] + newObject.rating[1]
            const changedObject = { ...newObject, summary: total, isRated: true}
            axios.put(`http://localhost:3001/allnames/${id}`, changedObject)
            setIsRated(true)
        }
    }

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

