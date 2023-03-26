import Product from "../../Product/Product";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import Spinner from "../../Spinner/Spinner";
import { isLiked } from "../../../utils/products";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../Page/NotFoundPage/NotFoundPage";

const ProductPage = ({ currentUser }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getProductId(productId)
      .then((productData) => {
        setProduct(productData);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      })
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
        ) : !isError ? (
          <Product
            {...product}
            currentUser={currentUser}
            onProductLike={handleProductLike}
          />
        ) : (
          <NotFoundPage />
        )}
      </section>
    </>
  );
};

export default ProductPage;
