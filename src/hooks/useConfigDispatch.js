import { useContext } from "react";
import EmbedContext from "../EmbedContext";

const useConfigDispatch = () => {
  const context = useContext(EmbedContext);

  if (!context) {
    throw new Error(
      "useConfigDispatch must be used within EmbedContext.Provider"
    );
  }

  return context.config[1];
};

export default useConfigDispatch;
