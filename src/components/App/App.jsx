import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const fetchData = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then( (response) => {
      console.log('Response from /gallery: ', response);
      setGalleryList(response.data);
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
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg"/>
    </div>
  );
}

export default App;
