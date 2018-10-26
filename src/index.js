import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import TextField from '@material-ui/core/TextField'

import Name from './Name'
import Photos from './Photos'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const handleFirstNameChange = e => setFirstName(e.target.value)
  const handleLastNameChange = e => setLastName(e.target.value)

  return (
    <div>
      <Name firstName={firstName} lastName={lastName} />
      <Photos firstName={firstName} />
      <form>
        <TextField
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br />
        <TextField
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
