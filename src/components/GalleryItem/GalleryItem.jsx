import { useState } from 'react';

function GalleryItem({object}){
    
    let [isClicked, setIsClicked] = useState(true);

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
                {isClicked ? <img onClick={toggleImg} src={object.path}/> : <p onClick={toggleDescription}>{object.description}</p>}
                </div>
                {/* <img src={object.path}/> */}
                {/* <p>{object.description}</p> */}
                {/* {imgDescriptionSwap} */}
            
            </div>
        </>
    )
}

export default GalleryItem;


