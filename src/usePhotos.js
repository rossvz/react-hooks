import { useState, useEffect } from 'react'
import axios from 'axios'

export const usePhotos = firstName => {
  const [photos, setPhotos] = useState([])
  useEffect(
    async () => {
      if (firstName.length > 3 && !photos.length) {
        const url = `https://jsonplaceholder.typicode.com/photos`
        const res = await axios.get(url)
        setPhotos(res.data)
      }
    },
    [firstName]
  )

  return photos
}
