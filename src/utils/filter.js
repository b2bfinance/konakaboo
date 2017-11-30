import queryString from 'query-string';

export function getChosenForGroup(chosen, group) {
  return chosen[group];
}

export function getEmptyChosen(available) {
  return available.reduce((chosen, filter, i) => {
    chosen[i] = filter.multiChoice ? [] : '';
    return chosen;
  }, {});
}

export function getQueryStringFromState(filterState) {
  return queryString.stringify(
    Object.keys(filterState.chosen).reduce((filters, chosen) => {
      const available = filterState.available[chosen];
      const isMulti = available.multiChoice;
      const value = filterState.chosen[chosen];

      if (isMulti && value.length > 0) {
        filters[available.key] = value.join(',');
      } else if (value) {
        filters[available.key] = value;
      }

      return filters;
    }, {})
  );
}
