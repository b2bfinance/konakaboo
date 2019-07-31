import { useEffect } from "react";
import {
  PRODUCTS_ERROR,
  PRODUCTS_LOAD_START,
  SET_PRODUCTS,
} from "../constants";
import { fetchProducts, makeProviderURI } from "../utils";
import useConfigState from "./useConfigState";
import useFilterState from "./useFilterState";
import useProductDispatch from "./useProductDispatch";
import useProductState from "./useProductState";

const useProductFetcher = () => {
  const { preloadedProducts } = useProductState();
  const { provider } = useConfigState();
  const filterState = useFilterState();
  const dispatchProductAction = useProductDispatch();

  // Add filter params to our provider
  const providerWithFilters = makeProviderURI(provider, filterState);

  useEffect(() => {
    // If we have preloaded products and have not filtered then set
    // the preloaded products as the currently active products
    if (preloadedProducts.length > 0 && provider === providerWithFilters) {
      dispatchProductAction({
        type: SET_PRODUCTS,
        payload: {
          products: preloadedProducts,
        },
      });

      return;
    }

    // No provider means we don't need to fetch any products let's abort now.
    if (!provider) {
      return;
    }

    const fetchData = async () => {
      dispatchProductAction({
        type: PRODUCTS_LOAD_START,
      });

      try {
        const productsResponse = await fetchProducts(providerWithFilters);
        const productsResponseData = productsResponse.data;

        dispatchProductAction({
          type: SET_PRODUCTS,
          payload: {
            products: productsResponseData.data,
          },
        });
      } catch (e) {
        dispatchProductAction({
          type: PRODUCTS_ERROR,
        });
      }
    };

    fetchData();
  }, [providerWithFilters]);
};

export default useProductFetcher;
