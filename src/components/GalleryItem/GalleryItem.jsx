function GalleryItem({object}){
    return (
        <>
            <div className="object" key={object.id}>
            <h3>{object.title}</h3>
            <img src={object.path}/>
            <p>{object.description}</p>
            {/* {imgDescriptionSwap} */}
            <br/>
            <button>love it!</button>
            <p>{object.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;