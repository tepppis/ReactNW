import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'

const App = () => {

  // App komponentin tila
const [showLaskuri, setShowLaskuri] = useState(false)

const huomio = () => {
  alert("Huomio!")
}


  return (
    <div className="App">

        <h1>Hello World from React!</h1>

        <Posts />

        {showLaskuri && <Laskuri huomio={huomio} />}

        {/*BOOLEAN VAIHDETAAN BUTTONIA PAINAMALLA KÄÄNTEISEKSI (TRUE/FALSE)  !showLaskuri parametrillä  */}
        {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

        {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}


        <Viesti teksti="Tervehdys app komponentista :)" />

    </div>
  )
}

export default App
