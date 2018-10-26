import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ firstName, lastName }) => (
  <Typography variant="h3">
    Hello {firstName} {lastName}
  </Typography>
)
