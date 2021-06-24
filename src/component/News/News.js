import './News.scss';

const News=({id,image,date,title,subTitle})=>{
    return(
        <div className="news" id={id} data-aos="zoom-in-right" data-aos-duration="2000">
            <img src={image} className="news__image" height="350px"/>
            <h6 className="news__date">{date}</h6>
            <h2 className="news__title">{title}</h2>
            <p className="news__subTitle">{subTitle}</p>
            <span className="news__span"><a className="news__a" href={`/news/${id}`}></a></span>

        </div>
    )
}
export default News;