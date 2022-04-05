import "./MenuItem.styles.scss";
import { withRouter } from "../../helpers/withRouter";

const MenuItem = ({ title, imageUrl, size, linkUrl, navigate }) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
