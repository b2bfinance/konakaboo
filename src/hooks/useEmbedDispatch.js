import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useEmbedDispatch = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error(
      "useEmbedDispatch must be used within EmbedContext.Provider"
    );
  }

  return context.dispatch;
};

export default useEmbedDispatch;
