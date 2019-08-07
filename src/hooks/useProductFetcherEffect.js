import { useEffect, useRef } from "react";
import {
  fetchProducts,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SET,
} from "../utils";
import useEmbedDispatch from "./useEmbedDispatch";
import useEmbedState from "./useEmbedState";

const useProductFetcherEffect = () => {
  const isFirstRender = useRef(true);
  const { products, provider } = useEmbedState();
  const dispatchAction = useEmbedDispatch();

  useEffect(() => {
    // It's the first render and we already have products, so we don't
    // need to go fetching any this time round.
    if (isFirstRender && products.length > 0) {
      isFirstRender.current = false;

      // We still dispatch the products set action to handle the
      // product loading state.
      dispatchAction({
        type: PRODUCTS_SET,
        products,
      });

      return;
    }

    // No provider means we don't need to fetch any products let's abort now.
    if (!provider) {
      return;
    }

    const fetchData = async () => {
      dispatchAction({
        type: PRODUCTS_LOADING,
      });

      try {
        const productsResponse = await fetchProducts(provider);
        const productsResponseData = productsResponse.data;

        dispatchAction({
          type: PRODUCTS_SET,
          products: productsResponseData.data,
        });
      } catch (e) {
        dispatchAction({
          type: PRODUCTS_ERROR,
        });
      }
    };

    fetchData();
  }, [provider, products]);
};

export default useProductFetcherEffect;
