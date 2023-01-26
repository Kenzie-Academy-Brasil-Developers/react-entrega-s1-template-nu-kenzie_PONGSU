import { useState } from 'react'
import './App.css'
import { HomePage } from './Components/HomePage'
import { ApplicationPage } from './Components/ApplicationPage'

const App = () => {
  const [homePage, setHomePage] = useState(true)
  const [listTransactions, setListTransactions] = useState([])

  return (
    <div className="App">
      { 
      homePage? 
      <HomePage setHomePage={setHomePage}/>:
      <ApplicationPage setHomePage={setHomePage} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      }      
    </div>
  )
}

export default App