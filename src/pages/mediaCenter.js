import { useEffect ,useState} from "react";
import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";
import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import axios from 'axios';
import MediaCenterComponent from "../component/MediaCenter/mediaCenter";
import Random from '../assets/images/variousImage/random.png';
import Title from "../component/Title/Title";
import List from "../component/AllProject/allProjects";
import ReactPaginate from "react-paginate";

const MediaCenter = () => {
  const [list,setList]=useState([]);
  useEffect(()=>{
    axios.get('http://10.0.30.166:8080/all-programs').then((res)=>{
      setList(res.data.data);
    })
  },[])
  console.log(list);
  const [pageNumber, setPageNumber] = useState(0);
  /* number of projects per page */
  const projectsPerPage = 6;
  const pageProjects = pageNumber * projectsPerPage;
  const pageCount = Math.ceil(list.length / projectsPerPage);
  /* Changing Page Function  */
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
// all Projects Title
  return (
    <div>
      <SliderBanner />
    <Title title="Projects" />
    <div className="DivDetail">
    {list
      ? list.slice(pageProjects,pageProjects+projectsPerPage).map((item) => {
          console.log(item._id,'item');
          return (
              <List
              projectName={item.title}
              link={item.link}          
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

export default MediaCenter;
