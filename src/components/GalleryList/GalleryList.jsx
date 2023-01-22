import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryListProp}) {
    return (
        <>
            {galleryListProp.map(object => 
                (
                    <GalleryItem 
                        object={object}
                    />
                )
            )}
            
        </>
    )
}

export default GalleryList;