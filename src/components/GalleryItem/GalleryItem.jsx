import { useState } from 'react';
import axios from 'axios';


function GalleryItem({fetchData, object}){
    // const [counter, setCounter] = useState(object.likes);

    let [isClicked, setIsClicked] = useState(true);

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
    }

    const toggleImg = () => {
        console.log('clicked a picture');
        setIsClicked(!isClicked);
    }   

    const toggleDescription = () => {
        console.log('clicked a description');
        setIsClicked(true);
    }

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
    )
}

export default GalleryItem;


