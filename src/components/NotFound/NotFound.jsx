import React from "react";
import s from "./NotFound.module.scss";
import notFound from "../../assets/img/icon/notfound.svg";
import cn from "classnames";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className={cn(s.empty, "d-fl-col")}>
        <div className={s.img}>
          <img src={notFound} alt="notFound" />
        </div>

        <p className={s.subtitle}>
          Простите, по вашему запросу <br /> ничего не надено.
        </p>

        <Link className={s.link__home} to="/">
          На главную
        </Link>
      </div>
    </>
  );
};

export default NotFound;
