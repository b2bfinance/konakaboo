import { useContext } from "react";
import { EmbedContext } from "..";

const useProductState = () => {
  const {
    products: [products]
  } = useContext(EmbedContext);

  if (!products) {
    throw new Error("useProductState must be used within EmbedContext.Provider");
  }

  return products;
};

export default useProductState;
