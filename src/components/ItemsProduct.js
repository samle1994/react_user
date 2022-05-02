const ItemsProduct = (props) => {
  const { name, photo, slug, price, id } = props;
  return (
    <>
      <div className="item_pr">
        <div className="images_pr">
          <a title={name} href={`san-pham/${slug}-${id}`}>
            <img className="transition img-fluid" src={photo} alt={name} />
          </a>
        </div>
        <div className="des_pr">
          <h3>
            <a title={name} href={`san-pham/${slug}-${id}`}>
              {name}
            </a>
          </h3>
          <p>{price} VNĐ</p>
        </div>
      </div>
    </>
  );
};

export default ItemsProduct;
