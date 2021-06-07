import './objectDetails.scss';
const ObjectDetails=({image,title})=>{
   // ObjectDetails to any display as image and title 
    return(
        <div className="objectDetail">
            <a href="/" className="objectDetail__linkTo">
            <img className="objectDetail__image" src={image} height="400px" />
            </a>
            <div className="objectDetail__fakeDiv" id="title">
            {title}
            </div>
        </div>
    )
}
export default ObjectDetails;