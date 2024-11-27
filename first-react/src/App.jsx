import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import User from './User/user.json'
import Users from './Users/users.json'



function App() {


  const user1 = users[0]
  const user2 = users[1]
  const user3 = users[2]

  return (

    < div className='App' >

    

    <Button/>

    {users.map(user => <User key={user.id} user={user} /> )}
    </div>
  
  )
}

export default App
