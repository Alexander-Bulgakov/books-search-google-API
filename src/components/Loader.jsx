import React, { useEffect, useState } from "react";
import BooksStore from "../store/booksStore";
import { observer } from "mobx-react-lite";
import loader from "../images/loading.svg";
import "./Loader.scss";

const Loader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(BooksStore.loader);
  }, [BooksStore.loader]);

  if (!visible) {
    return null;
  } else {
    return (
      <div className="loader">
        <img src={loader} alt="Загрузка книг" />
      </div>
    );
  }
};

export default observer(Loader);
