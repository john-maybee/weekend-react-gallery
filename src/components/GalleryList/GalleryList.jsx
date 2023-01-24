import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryListProp}) {
    return (
        <>
            {galleryListProp.map(object => 
                (
                    <div className="objectItem" key={object.id}>
                        <GalleryItem 
                            object={object}
                        />
                        <br />
                        <button>love it!</button>
                        <p>{object.likes}</p>
                    </div>
                )
                
            )}
            
        </>
    )
}

export default GalleryList;