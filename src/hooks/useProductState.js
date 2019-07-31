import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useProductState = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error(
      "useProductState must be used within EmbedContext.Provider"
    );
  }

  return context.products[0];
};

export default useProductState;
