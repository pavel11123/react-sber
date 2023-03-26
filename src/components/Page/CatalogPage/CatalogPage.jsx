import React from "react";
import Spinner from "../../Spinner/Spinner";
import CardList from "../../CardList/CardList";
import s from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";

const CatalogPage = ({ isLoading, cards, handleProductLike, currentUser }) => {
  return (
    <section className="section__product d-fl-col">
      <div className="product__container d-fl-col">
        {isLoading ? (
          <Spinner />
        ) : (
          <CardList
            cards={cards}
            onProductLike={handleProductLike}
            currentUser={currentUser}
          />
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
