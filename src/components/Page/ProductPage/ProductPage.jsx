import Product from "../../Product/Product";
import { useContext, useEffect, useState } from "react";
import api from "../../../utils/api";
import Spinner from "../../Spinner/Spinner";
import { isLiked } from "../../../utils/products";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../Page/NotFoundPage/NotFoundPage";
import { UserContext } from "../../../context/userContext";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { productId } = useParams();
  const { user: currentUser } = useContext(UserContext);

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
    api.changeLikeProduct(product._id, liked).then((updateCard) => {
      setProduct(updateCard);
    });
  };

  return (
    <>
      <section className="d-fl section__product">
        {isLoading ? (
          <Spinner />
        ) : !isError ? (
          <Product {...product} onProductLike={handleProductLike} />
        ) : (
          <NotFoundPage />
        )}
      </section>
    </>
  );
};

export default ProductPage;
