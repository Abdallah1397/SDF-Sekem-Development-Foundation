import './allProjects.scss';
// Project List "Projects Details"
const List = ({ projectName, link}) => {
  return (
    <div className="list" data-aos="zoom-in-right" data-aos-duration="2000">
      <div className="list__div-header">
        <h3>{projectName}</h3>
      </div>
      <div className="list__mainDiv">
        {link ?<a className="list__link" href={link} target="_blank">{link}</a> : <span className="list__span">No Link available you can go to sctors to show more Detial </span>}
      </div>
    </div>
  );
}
export default List;
