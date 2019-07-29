import { useContext } from "react";
import { EmbedContext } from "..";

const useConfigDispatch = () => {
  const {
    config: [_, configDispatch]
  } = useContext(EmbedContext);

  if (!configDispatch) {
    throw new Error("useConfigDispatch must be used within EmbedContext.Provider");
  }

  return configDispatch;
};

export default useConfigDispatch;
