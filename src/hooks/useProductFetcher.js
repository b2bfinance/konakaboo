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

const useProductFetcher = () => {
  const configState = useConfigState();
  const filterState = useFilterState();
  const dispatchProductAction = useProductDispatch();

  // No provider means we don't need to fetch any products let's abort now.
  if (!configState.provider) {
    return;
  }

  // Add filter params to our provider
  const providerWithFilters = makeProviderURI(
    configState.provider,
    filterState
  );

  useEffect(() => {
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
            data: productsResponseData.data,
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
