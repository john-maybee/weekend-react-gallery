import React from 'react';
import {useEffect, useState} from 'react'; 
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  const fetchData = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then( (response) => {
      console.log('Response from /gallery: ', response);
      setGalleryItems(response.data);
    })
    .catch(function (error) {
      console.log('Error on GET: ', error);
    });
  }

  useEffect( () => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryListProp={galleryItems}/>
      {/* <img src="images/goat_small.jpg"/> */}
    </div>
  );
}

export default App;
