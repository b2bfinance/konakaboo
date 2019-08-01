import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useEmbedState = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error("useEmbedState must be used within EmbedContext.Provider");
  }

  return context.state;
};

export default useEmbedState;
