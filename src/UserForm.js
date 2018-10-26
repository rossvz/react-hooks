import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

export default ({
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange
}) => {
  return (
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
  )
}
