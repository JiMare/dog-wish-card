import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WishCard } from "./WishCard";

export const Wish = () => {
  const { id } = useParams();
  const [wishData, setWishData] = useState(null);

  useEffect(() => {
    fetch("https://xmas-api.itgirls.cz/cards/" + id)
      .then((response) => response.json())
      .then((data) => {
        setWishData(data.data);
      });
  }, []);

  return wishData && <WishCard wishData={wishData} />;
};
