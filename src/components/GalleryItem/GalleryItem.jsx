function GalleryItem({object}){
    return (
        <>
            <div key={object.id}>
            <h2>{object.title}</h2>
            <img src={object.path}/>
            <br/>
            <button>love it!</button>
            <p>{object.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;