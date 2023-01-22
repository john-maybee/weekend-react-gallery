function GalleryList({galleryListProp}) {

    return (
        <>
            {galleryListProp.map(object => 
                (<div key={object.id}>
                    <h2>{object.title}</h2>
                    <img src={object.path}/>
                    <button>love it!</button>
                    <p>{object.likes}</p>
                </div>)
            )}
            
        </>
    )
}

export default GalleryList;