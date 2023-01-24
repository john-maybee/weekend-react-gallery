import { useState } from 'react';
import axios from 'axios';


function GalleryItem({fetchData, object}){
    // const [counter, setCounter] = useState(object.likes);

    let [isClicked, setIsClicked] = useState(true); // created a variable called isClicked and created the setter as well. Starting state is true

    const incrementLike = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${object.id}`
        })
        .then(response => {
            alert(`you liked ${object.title} image!`);
            fetchData();
        })
        .catch(error => {
            console.log(error);
        })
    } // using axios to put the like increment towards the object.id that is associated with the button clicked then fetching the data to render

    const toggleImg = () => {
        console.log('clicked a picture');
        setIsClicked(!isClicked);
    }   // creating a const that sets the isClicked property to false when the line item is clicked

    const toggleDescription = () => {
        console.log('clicked a description');
        setIsClicked(true);
    }   // switches the description back to the original image

    return (
        <>
            <div className="object" key={object.id}>
                <h3>{object.title}</h3>
                <div>
                    {isClicked ? <img onClick={toggleImg} src={object.path}/> : <p className="description" onClick={toggleDescription}>{object.description} <br />(click here to see the picture)</p>}
                </div>
                <br />
                <button className="likes" onClick={incrementLike}>love it!</button>
                <p>{object.likes} in love!</p>
            </div>
        </>
    ) // returns the content we need to populate onto the DOM via html
} // end of the GalleryItem function

export default GalleryItem;


