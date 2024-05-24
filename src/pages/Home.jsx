import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const username = useSelector((state)=> state.user.value.username)

  return (
    <div>This is home {username !==""?  `for user ${username}` : ""}</div>
  )
}

export default Home