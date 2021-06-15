import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { getNewsRequest } from "../store/actions/news";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import News from "../component/News/News";
import DommeyImage from "../assets/images/social/DSC_4656.jpg";
const NewsPage = ({ news, getNews }) => {
  useEffect(() => {
    getNews();
  }, []);
  /* State used to the paginate */
  const [pageNumber, setPageNumber] = useState(0);
  /* number of news per page */
  const newsPerPage = 6;
  const pageNews = pageNumber * newsPerPage;
  const pageCount = Math.ceil(news.length / newsPerPage);
  /* Changing Page Function  */
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <SliderBanner />
      <Title title="news & Events" />
      <div style={({ width: "80%" }, { marginLeft: "10%" })}>
        {news ? (
          news.slice(pageNews,pageNews+newsPerPage).map((item) => {
            return (
              <News
                id={item._id}
                image={item.img}
                date={item.date}
                title={item.title}
                subTitle={item.details}
              />
            );
          })
        ) : (
          <h1
            style={
              ({ textAlign: "center" },
              { marginTop: "30px" },
              { fontWeight: "bolder" })
            }
          >
            Ooops !! Something Wrong
          </h1>
        )}
        
      </div>
             {/* React Paginate to make pagination in the page */}
             <div className="paginate">
             <ReactPaginate
               previousLabel={"← Previous"}
               nextLabel={"Next →"}
               pageCount={pageCount}
               onPageChange={changePage}
               containerClassName={"pagination"}
               previousLinkClassName={"pagination__link"}
               nextLinkClassName={"pagination__link"}
               disabledClassName={"pagination__link--disabled"}
               activeClassName={"pagination__link"}
               className="mt-5"
             />
           </div>

    </div>
  );
};
const mapStateToProps = (state) => ({
  news: state.news.news,
});
const mapDispatchToProps = {
  getNews: getNewsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
