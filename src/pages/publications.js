import { useEffect, useState } from "react";
import axios from "axios";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import Publication from "../component/publications/publications";
const Publications = () => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    axios.get("http://10.0.30.166:8080/publications").then((response) => {
      setPublications(response.data.data);
    });
  }, []);
  return (
    <div>
      <SliderBanner />
      <Title title="Publications" />
      <div className="DivDetail">
        {publications.map((item) => {
          return (
            <Publication
              title={item.title}
              img={`http://10.0.30.166:8080/${item.img}`}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Publications;
