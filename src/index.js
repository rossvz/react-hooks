import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import Name from './Name'
import Photos from './Photos'
import UserForm from './UserForm'
import Intro from './Intro'

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const handleFirstNameChange = e => setFirstName(e.target.value)
  const handleLastNameChange = e => setLastName(e.target.value)

  return (
    <div>
      <Intro />
      <Name firstName={firstName} lastName={lastName} />
      <UserForm
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <Photos firstName={firstName} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
