import { useContext } from "react";
import { EmbedContext } from "..";

const useConfigState = () => {
  const {
    config: [config]
  } = useContext(EmbedContext);

  if (!config) {
    throw new Error("useConfigState must be used within EmbedContext.Provider");
  }

  return config;
};

export default useConfigState;
