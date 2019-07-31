import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useFilterDispatch = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error(
      "useFilterDispatch must be used within EmbedContext.Provider"
    );
  }

  return context.filters[1];
};

export default useFilterDispatch;
