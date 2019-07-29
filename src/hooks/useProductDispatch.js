import { useContext } from "react";
import { EmbedContext } from "..";

const useProductDispatch = () => {
  const {
    products: [_, productsDispatch]
  } = useContext(EmbedContext);

  if (!productsDispatch) {
    throw new Error("useProductDispatch must be used within EmbedContext.Provider");
  }

  return productsDispatch;
};

export default useProductDispatch;
