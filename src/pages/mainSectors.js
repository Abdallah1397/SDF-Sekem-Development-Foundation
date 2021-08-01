import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getSectorDetailsRequest } from "../store/actions/sectorDetails";
import ReactPaginate from "react-paginate";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";
import Title from "../component/Title/Title";
import ProjectList from "../component/projectList/projectList";
const MainSector = ({ sectorDetail, getSectorDetail }) => {
  const params = useParams();
  /* State used to the paginate */
  const [pageNumber, setPageNumber] = useState(0);
  /* number of news per page */
  const ProjectsPerPage = 6;
  const pageProjects = pageNumber * ProjectsPerPage;
  useEffect(() => {
    if (params.id) {
      getSectorDetail(params.id);
    }
    }, [params.id]);
  /* Changing Page Function  */
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    // Display Project Details
    <div>
      <SliderBanner />
      <Title title={sectorDetail.title} />
      <div className="DivDetail">
        {sectorDetail.programs
          ? sectorDetail.programs
              .slice(pageProjects, pageProjects + ProjectsPerPage)
              .map((item) => {
                return (
                  <ProjectList
                    projectName={item.title}
                    link={item.link}
                    list={item.details}
                  />
                );
              })
          : "No Data To Show"}

      </div>
         {/* React Paginate to make pagination in the page */}
         <div className="paginate">
         <ReactPaginate
           previousLabel={"← Previous"}
           nextLabel={"Next →"}
           pageCount={sectorDetail.programs?(Math.ceil(sectorDetail.programs.length/ProjectsPerPage)):0}
           onPageChange={changePage}
           containerClassName={"pagination"}
           previousLinkClassName={"pagination__link"}
           nextLinkClassName={"pagination__link"}
           disabledClassName={"pagination__link--disabled"}
           activeClassName={"pagination__link"}
           className="mt-5"
         />
       </div>
      <AnimatedCounter
        counter1={527872}
        fact1="Investments"
        counter2={80}
        fact2="Projects"
        counter3={500}
        fact3="Beneficiaries"
        fact4="Governorates"
        counter4={1321}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  sectorDetail: state.sectorDetails.sectorDetails,
});
const mapDispatchToProps = {
  getSectorDetail: getSectorDetailsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainSector);
