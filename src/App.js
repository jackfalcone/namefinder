import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Display from './components/Display'

const App = () => {
  const [names, setNames] = useState([])
  const [showName, setShowName] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    axios
      .get('https://jsonstorage.net/api/items/51782ff5-8fd8-49da-8cc1-0e8d784aeb96')
      .then(response => {
        setNames(response.data)
      })
  }, [])

  console.log(names)

  const handleClickName = () => {
    const max = names.allnames.length
    const random = Math.floor(Math.random() * max)
    const name = names.allnames[random]
    setShowName(name)
  }


  const handleChange = (event) => {
    setUser(event.target.value)
  }

  return (
    <div>
      <h1>NameFinder</h1>
      <strong>User:</strong>
      <form onChange={handleChange}>
        <input type="radio" value="carmen" name="user" /> Carmen
        <input type="radio" value="yves" name="user" /> Yves
      </form>
      <br />
      <button onClick={handleClickName}>
        Show new name
      </button>
      <Display actualname={showName} user={user} />
    </div>
  )
}

export default App;