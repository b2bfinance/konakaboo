import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useConfigState = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error("useConfigState must be used within EmbedContext.Provider");
  }

  return context.config[0];
};

export default useConfigState;
