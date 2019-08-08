import queryString from "query-string";

export const makeFilterQueryString = filters => {
  const queryObject = filters.reduce((selected, filter) => {
    if (filter.selected.length > 0) {
      return {
        ...selected,
        [filter.key]: filter.selected.join(","),
      };
    }

    return selected;
  }, {});

  return queryString.stringify(queryObject);
};
