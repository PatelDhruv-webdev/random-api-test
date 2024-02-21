import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const URL = "https://strangerthings-quotes.vercel.app/api/quotes/"
function App() {
  const [author, setAuthor] = useState(0)
  const [quote, setQuote] = useState("")
  
  useEffect(()=>{
    const fetchQuoteData = async () => {
     
      const response = await fetch(URL);
      const data = await response.json();
   
       setQuote(data[0].quote);
     setAuthor(data[0].author);  
    }
    fetchQuoteData()

    const intervalId = setInterval(fetchQuoteData, 10000);

  // Cleanup function to clear interval
  return () => clearInterval(intervalId);
  },[])
  
  return (
    
    <div>
      <h1>Author: {author}</h1>
      <h1>Quote: {quote}</h1>
     
  </div>
   
   
  )
}

export default App
