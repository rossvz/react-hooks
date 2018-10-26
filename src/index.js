import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import Name from './Name'
import Photos from './Photos'
import UserForm from './UserForm'

const App = ()=> {
   const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const handleFirstNameChange = e => setFirstName(e.target.value)
  const handleLastNameChange = e => setLastName(e.target.value)

  return (
    <div>
      <Name firstName={firstName} lastName={lastName} />
      <Photos firstName={firstName} />
      <UserForm firstName={firstName} lastName={lastName} handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
