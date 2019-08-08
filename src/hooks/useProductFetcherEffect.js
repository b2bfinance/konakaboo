import { useEffect, useRef } from "react";
import {
  fetchProducts,
  makeFilterQueryString,
  makeProviderURI,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SET,
} from "../utils";
import useEmbedDispatch from "./useEmbedDispatch";
import useEmbedState from "./useEmbedState";

const useProductFetcherEffect = () => {
  const firstRender = useRef(true);
  const { provider, products, filters } = useEmbedState();
  const dispatchAction = useEmbedDispatch();

  useEffect(() => {
    let isMounted = true;

    // No provider means we don't need to fetch any products let's abort now.
    if (!provider) {
      return;
    }

    if (firstRender.current) {
      firstRender.current = false;

      // Don't fetch products on first render if we have some already.
      if (products.length > 0) {
        return;
      }
    }

    const fetchData = async () => {
      dispatchAction({
        type: PRODUCTS_LOADING,
      });

      try {
        const productsResponse = await fetchProducts(
          makeProviderURI(provider, makeFilterQueryString(filters))
        );

        const productsResponseData = productsResponse.data;

        if (isMounted) {
          dispatchAction({
            type: PRODUCTS_SET,
            products: productsResponseData.data,
          });
        }
      } catch (e) {
        if (isMounted) {
          dispatchAction({
            type: PRODUCTS_ERROR,
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [filters]);
};

export default useProductFetcherEffect;
