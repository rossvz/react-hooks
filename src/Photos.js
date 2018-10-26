import React from 'react'
import { usePhotos } from './usePhotos'

export default ({ firstName }) => {
  const photos = usePhotos(firstName)
  return (
    <div>
      <div>User has {photos.length} photos</div>
      <img src={photos[0] && photos[0].url} alt="" />
    </div>
  )
}
