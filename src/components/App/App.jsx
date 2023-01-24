import React from 'react';
import {useEffect, useState} from 'react'; 
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {

  const [galleryItems, setGalleryItems] = useState([]); // get and set the gallery items in the blank array.

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
  } // use axios to get the gallery from the server

  useEffect( () => {
    fetchData();
  }, []); // using useEffect from react to fetch the Data

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryListProp={galleryItems} fetchData={fetchData}/>
    </div>
  );
} // return items to the DOM 

export default App;
