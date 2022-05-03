import { Link } from "react-router-dom";
const ItemsProduct = (props) => {
  const { name, photo, slug, price, id } = props;
  const photo_pr = photo ? photo : "./noimage.png";
  return (
    <>
      <div className="item_pr">
        <div className="images_pr">
          <Link to={`/san-pham/${slug}-${id}`}>
            <img className="transition img-fluid" src={photo_pr} alt={name} />
          </Link>
        </div>
        <div className="des_pr">
          <h3>
            <Link to={`/san-pham/${slug}-${id}`}>{name}</Link>
          </h3>
          <p>{price} VNĐ</p>
        </div>
      </div>
    </>
  );
};

export default ItemsProduct;
