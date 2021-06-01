import { ImFacebook, ImTwitter, ImLinkedin2,ImInstagram,ImYoutube} from 'react-icons/im';

import './socialmedia.scss';

const SocialIcons = () => {
  return (
    <div className="socila-icons">
      <span className="socila-icons__icon">
        <ImFacebook />
      </span>
      <span className="socila-icons__icon">
        <ImTwitter />
      </span>
      <span className="socila-icons__icon">
        <ImLinkedin2 />
      </span>
      <span className="socila-icons__icon">
        <ImInstagram />
      </span>
      <span className="socila-icons__icon">
        <ImYoutube />
      </span>
    </div>
  );
};

export default SocialIcons;
