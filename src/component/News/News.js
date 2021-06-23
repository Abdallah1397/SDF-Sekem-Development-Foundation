import './News.scss';

const News=({id,image,date,title,subTitle})=>{
    return(
        <div className="news" id={id}>
            <img src={image} className="news__image" height="350px"/>
            <h6 className="news__date">{date}</h6>
            <h2 className="news__title">{title}</h2>
            <p className="news__subTitle">{subTitle}</p>
            <a href={`/news/${id}`} className="news__link"> <i className="news__icon fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i>

            </a>
        </div>
    )
}
export default News;