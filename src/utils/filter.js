import queryString from "query-string";

export const makeFilterQueryString = filters => {
  const queryObject = filters.reduce(
    (selected, filter) => ({
      ...selected,
      [filter.key]: filter.selected,
    }),
    {}
  );

  return queryString.stringify(queryObject);
};
