import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useProductDispatch = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error(
      "useProductDispatch must be used within EmbedContext.Provider"
    );
  }

  return context.products[1];
};

export default useProductDispatch;
