import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'
import './css/App.css'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const [fact, setFact] = useState()
  const { image } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newfact => setFact(newfact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <section>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' />
        <h1>Meowstagram</h1>
        <button onClick={() => { handleClick() }}>&#x21bb;</button>
      </section>
      <div className='card'>
        {image && <img src={image} alt='cat' />}
        {fact && <p>{fact}</p>}
      </div>
    </main>
  )
}
