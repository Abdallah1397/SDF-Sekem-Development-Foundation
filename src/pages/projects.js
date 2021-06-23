import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getProjectsRequest} from '../store/actions/projects';
import ObjectDetails from "../component/objectDetails/objectDetails";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";

const Projects=({projects,getProjects})=>{

    // to get the id of sectors to find the projects inside it 
    const params=useParams();
    useEffect(()=>{
        if(params.id){
            getProjects(params.id);
            }
    },[params.id])
    return(
        <div>
        <SliderBanner />
        <Title title="Programs" />
        <div className="DivDetail">
        {projects[0]?(
            projects[0].projects.map((item)=>{
                return( <ObjectDetails
                    title={item.title}
                    image={`http://10.0.30.166:8080/${item.img}`}
                    id={item._id}
                    href="project"
                  />)
               
            })):"Ooops Server is Down Now :("}
        </div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    projects:state.projects.projects,
});
const mapDispatchToProps={
    getProjects:getProjectsRequest,
}
export default connect(mapStateToProps,mapDispatchToProps)(Projects);