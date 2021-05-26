import React, { useState, useEffect }  from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/page/Header.js';
import Brews from './components/brewery/Brews.js';
import Footer from './components/page/Footer.js';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://api.openbrewerydb.org/breweries`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

return (
  <div>
    <div className = 'container'>
      <Header />
      <br/><br/><br/>
      <Brews isLoading={isLoading} items={items}/>
      <br/>
      </div>
      <Footer/>
      </div>
  )
}

export default App;
