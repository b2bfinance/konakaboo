import { useContext } from "react";
import { EmbedContext } from "../EmbedWrapper";

const useFilterState = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error("useFilterState must be used within EmbedContext.Provider");
  }

  return context.filters[0];
};

export default useFilterState;
