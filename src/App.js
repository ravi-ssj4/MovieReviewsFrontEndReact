import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies');
      // Todo: check for status code for response and appropriately handle
      console.log(response.data);
      if (response.status != 200){
        console.log("error");
      }
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
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
