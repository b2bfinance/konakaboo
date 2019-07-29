import { useContext } from "react";
import { EmbedContext } from "..";

const useFilterDispatch = () => {
  const {
    filters: [_, filtersDispatch]
  } = useContext(EmbedContext);

  if (!filtersDispatch) {
    throw new Error("useFilterDispatch must be used within EmbedContext.Provider");
  }

  return filtersDispatch;
};

export default useFilterDispatch;
