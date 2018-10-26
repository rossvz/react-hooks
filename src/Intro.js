import React from 'react'
import Typography from '@material-ui/core/Typography'

export default () => (
  <div>
    <Typography variant="h2">React Hooks</Typography>
    <p>
      This is a short test to experiment with <code>useState</code> and{' '}
      <code>useEffect</code> in the latest React RFC.
    </p>

    <p>In this demo, the two inputs are separate states, and once the "First Name" field is above 3 characters, it should trigger a React "effect" hook to fetch a list of photos and rerender.</p>

    <p>Note that while the effect could be called on each re-render, we can specific that it should only run when a specific variable (firstName) is updated. Additionally, we can set some logic to tell the app to only trigger the new Axios request if we haven't fetch photos before.</p>
  </div>
)
