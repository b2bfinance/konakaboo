import { useEffect } from "react";
import {
  fetchProducts,
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SET,
} from "../utils";
import useEmbedDispatch from "./useEmbedDispatch";
import useEmbedState from "./useEmbedState";

const useProductFetcherEffect = () => {
  const {
    products,
    preFetchedProducts,
    provider,
    filterQuery,
  } = useEmbedState();

  const dispatchAction = useEmbedDispatch();

  useEffect(() => {
    // If we have preloaded products and have not filtered then set
    // the preloaded products as the currently active products
    if (
      preFetchedProducts.length > 0 &&
      !filterQuery &&
      products !== preFetchedProducts
    ) {
      dispatchAction({
        type: PRODUCTS_SET,
        products: preFetchedProducts,
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
        const productsResponse = await fetchProducts(provider, filterQuery);
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
  }, [filterQuery]);
};

export default useProductFetcherEffect;
