
import './projectList.scss';
// Project List "Projects Details"
const ProjectList = ({ projectName, link, list }) => {
  return (
    <div className="project_list" data-aos="zoom-in-right" data-aos-duration="2000">
      <div className="project_list__div-header">
        <h3>{projectName}</h3>
      </div>
      <div className="project_list__mainDiv">
        {link ?<a className="project_list__link" href={link} target="_blank">{link}</a> : ""}
        <ul>
        {list? 
          list.map((item)=>{
            return(
              <li className="project_list__li">{item}</li>
            )
          }):""
        }
        </ul>
      </div>
    </div>
  );
}
export default ProjectList;
