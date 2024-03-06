import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const factFirstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${factFirstWord}?size=3000&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response
        return setImage(`https://cataas.com/cat/${_id}?width=450&height=450`)
      })
  }, [fact])
  return { image }
}
