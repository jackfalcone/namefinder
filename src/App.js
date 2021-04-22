import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Display from './components/Display'

const App = () => {
  const [names, setNames] = useState([])
  const [notRated, setNotRated] = useState([])
  const [showName, setShowName] = useState([])
  const [user, setUser] = useState()
  const [pw, setPw] = useState()

  useEffect(() => {
    axios
      .get('https://jsonstorage.net/api/items/51782ff5-8fd8-49da-8cc1-0e8d784aeb96')
      .then(response => {
        setNames(response.data)
        const json = response.data
        const allnames = json.allnames
        const notRated = allnames.filter(e => e.rating[0] === 0 || e.rating[1] === 0)
        setNotRated(notRated)
        console.log(notRated)
      })
  }, [])

  const getRandom = (max) => {
    return Math.floor(Math.random() * max)
  }

  const handleClickName = () => {
    const max = notRated.length
    const random = getRandom(max)
    const name = notRated[random]
    setShowName(name)
  }

  const handlePw = (event) => {
    setPw(event.target.value)
  }

  const handleChange = (event) => {
    if (pw === '6170') {
      setUser(event.target.value)
    }
  }

  return (
    <div>
      <div id="top">
        <h1>Name Finder</h1>
        <strong>User</strong>
        <form onChange={handlePw}>
          Password <input type="password" name="pw" />
        </form>
        <small>Enter password before choosing user</small>
        <form onChange={handleChange}>
          <input type="radio" value="carmen" name="user" />Carmen
          &nbsp;
          <input type="radio" value="yves" name="user" />Yves
        </form>
      </div>
      <br />
      <br />
      <button onClick={handleClickName}>
        show new name
      </button>
      <Display actualname={showName} user={user} all={names} />
    </div>
  )
}

export default App;