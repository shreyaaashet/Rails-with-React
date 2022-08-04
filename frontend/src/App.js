
import './App.css';
import axios from 'axios';
import Books from './Component/Books'
import { useState } from 'react';
import { useEffect } from 'react';


const API_URL = "http://localhost:3000/api/v1/books";


function App() {
const [books, setBooks] = useState([]);// inside array the data will go in .data 

useEffect(() => {
  const getApiData = async () => {
    try {
      const res = await axios.get(API_URL);
      const data=await res.data;
      console.log(data,"data")
      setBooks(data);
    } catch (error) {
      console.log(error)
    }
  
 
  }

  getApiData()

  
  }, []);




// console.log("response",response)






  return (
    <>
      <Books books={books} />
    </>
  );
}

export default App;
