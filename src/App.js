import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies');
      // Todo: check for status code for response and appropriately handle
      console.log(response.data);
      // we are updating the state of the movies variable 
      // -> our component will re-render hence!
      setMovies(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  // we want to call getMovies() everytime the app component renders
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Layout}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
