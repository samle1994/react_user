import { Link } from "react-router-dom";
const ItemsNews = (props) => {
  const { name, photo, slug, des, id } = props;
  const photo_pr = photo ? photo : "./noimage.png";
  return (
    <>
      <div className="item_news">
        <div className="images_news">
          <Link to={`/tin-tuc/${slug}/${id}`}>
            <img className="transition img-fluid" src={photo_pr} alt={name} />
          </Link>
        </div>
        <div className="des_news">
          <h3>
            <Link to={`/tin-tuc/${slug}/${id}`}>{name}</Link>
          </h3>
          <p>{des}</p>
        </div>
      </div>
    </>
  );
};

export default ItemsNews;
