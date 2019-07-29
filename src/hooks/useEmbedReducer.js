import useConfigReducer from "./useConfigReducer";
import useFilterReducer from "./useFilterReducer";
import useProductReducer from "./useProductReducer";

const useEmbedReducer = ({ config, filters, products }) => {
  return {
    config: useConfigReducer(config),
    filters: useFilterReducer(filters),
    products: useProductReducer(products)
  };
};

export default useEmbedReducer;
