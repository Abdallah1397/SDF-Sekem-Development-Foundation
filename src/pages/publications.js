import { useEffect, useState } from "react";
import axios from "axios";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import ObjectDetails from "../component/publications/publications";
import ReactPaginate from "react-paginate";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    axios.get("http://10.0.30.166:8080/publications").then((response) => {
      setPublications(response.data.data);
    });
  }, []);
    /* State used to the paginate */
    const [pageNumber, setPageNumber] = useState(0);
    /* number of publications per page */
    const publicationsPerPage = 6;
    const pagePublications = pageNumber * publicationsPerPage;
    const pageCount = Math.ceil(publications.length / publicationsPerPage);
    /* Changing Page Function  */
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  return (
    <div>
      <SliderBanner />
      <Title title="Publications" />
      <div className="DivDetail">
        {publications.slice(pagePublications,pagePublications+publicationsPerPage).map((item) => {
          return (
            <ObjectDetails
              title={item.title}
              image={`http://10.0.30.166:8080/${item.img}`}
              link={item.link}
            />
          );
        })}
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
    </div>
  );
};
export default Publications;
