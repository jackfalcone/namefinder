import React from 'react'

import Rating from './Rating'
import Favorites from './Favorites'

const Display = ({ actualname, user, all }) => {

    return(
        <div>
            <h2>{actualname.name}</h2>
            <em>{actualname.gender}</em>
            <br />
            <br />
            <Rating actualname={actualname} user={user} all={all} />
            <br />
            <Favorites change={actualname} />
        </div>
    )
}

export default Display

