import Product from "../../Product/Product";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import Spinner from "../../Spinner/Spinner";
import { isLiked } from "../../../utils/products";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getUserInfo(), api.getProductId(productId)])
      .then(([userData, productData]) => {
        setCurrentUser(userData);
        setProduct(productData);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleProductLike = () => {
    const liked = isLiked(product.likes, currentUser._id);
    api.changeLikeProduct(product._id, liked).then((newCard) => {
      const newCards = product.map((product) => {
        return product._id === newCard._id ? newCard : product;
      });
      setProduct(newCards);
    });
  };

  return (
    <>
      <section className="d-fl section__product">
        {isLoading ? (
          <Spinner />
        ) : (
          <Product
            {...product}
            currentUser={currentUser}
            onProductLike={handleProductLike}
          />
        )}
      </section>
    </>
  );
};

export default ProductPage;
