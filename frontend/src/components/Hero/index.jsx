import Icon from "../Icon";
import "./index.css";
const Hero = () => {
  return (
    <div className="hero__section">
      <div></div>
      <div className="hero__sub__section">
        <img src="/hero-image.png" alt="hero-image" />
        <div className="hero__sub__section__content">
          <h2>{import.meta.env.VITE_APP_NAME}</h2>
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
      </div>
      <div className="hero__section__footer">
        <Icon name="lock" color="#292929" size={16} />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
};

export default Hero;
