import './objectDetails.scss';
const ObjectDetails=({image,title,id,href})=>{
   // ObjectDetails to any display as image and title 
    return(
        <a href={`/${href}/${id}`}>
        <div className="objectDetail" >

            <img className="objectDetail__image" src={image} height="400px" id="title"/>
            <div className="objectDetail__fakeDiv" id="title">
            {title}
            </div>
            
        </div>
        </a>

    )
}
export default ObjectDetails;