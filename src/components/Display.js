import React from 'react'

import Rating from './Rating'
import Favorites from './Favorites'

const Display = ({ actualname, user, all }) => {

    return(
        <div>
            <h2>{actualname.name}</h2>
            <strong>{actualname.gender}</strong>
            <Rating actualname={actualname} user={user} all={all} />
            <Favorites change={actualname} />
        </div>
    )
}

export default Display

