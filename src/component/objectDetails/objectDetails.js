import './objectDetails.scss';
const ObjectDetails=({image,title,id,href})=>{
   // ObjectDetails to any display as image and title 
    return(
        <div className="objectDetail" >
        <a href={`/${href}/${id}`}  >
        <div >

            <img className="objectDetail__image" src={image} height="400px" id="title" />
            <div className="objectDetail__fakeDiv" id="title">
            {title}
            </div>
            
        </div>
        </a>
        </div>

    )
}
export default ObjectDetails;