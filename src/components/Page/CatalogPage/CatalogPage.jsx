import React from "react";
import Spinner from "../../Spinner/Spinner";
import CardList from "../../CardList/CardList";
import s from "./CatalogPage.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const CatalogPage = () => {
  const { isLoading } = useContext(UserContext);
  return (
    <section className="section__product d-fl-col">
      <div className="product__container d-fl-col">
        {isLoading ? <Spinner /> : <CardList />}
      </div>
    </section>
  );
};

export default CatalogPage;
