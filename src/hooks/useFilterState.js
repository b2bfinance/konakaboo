import { useContext } from "react";
import { EmbedContext } from "..";

const useFilterState = () => {
  const {
    filters: [filters]
  } = useContext(EmbedContext);

  if (!filters) {
    throw new Error("useFilterState must be used within EmbedContext.Provider");
  }

  return filters;
};

export default useFilterState;
