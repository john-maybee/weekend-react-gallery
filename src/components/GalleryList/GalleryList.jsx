import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryListProp, fetchData}) {
    return (
        <>
            {galleryListProp.map(object => 
                (
                    <div className="objectItem" key={object.id}>
                        <GalleryItem 
                            object={object}
                            fetchData={fetchData}
                        />                   
                    </div>
                )
                
            )}
            
        </>
    )
} // this GalleryList function takes in props from the App.jsx and utilizes it to map the data sent over from the server. 
// Also plugs GalleryItem into the DOM and creates props/hooks for the GalleryItem component to take in and use.

export default GalleryList;