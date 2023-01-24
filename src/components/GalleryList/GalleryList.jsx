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
}

export default GalleryList;