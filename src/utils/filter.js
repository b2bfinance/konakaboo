import queryString from "query-string";

export function getEmptyChosen(availableFilters) {
  return availableFilters.reduce((chosen, filter, i) => {
    chosen[i] = filter.multiChoice ? [] : "";
    return chosen;
  }, []);
}

export function makeFilterQueryString({ availableFilters, chosenFilters }) {
  const queryObject = chosenFilters.reduce((filters, chosen, chosenIndex) => {
    const available = availableFilters[chosenIndex];
    const isMulti = available.multiChoice;
    const value = chosenFilters[chosenIndex];

    if (isMulti) {
      const filteredValues = value.filter(f => (f ? f : false));

      if (filteredValues.length) {
        filters[available.key] = filteredValues.join(",");
      }

      return filters;
    }

    if (value) {
      filters[available.key] = value;
    }

    return filters;
  }, {});

  return queryString.stringify(queryObject);
}

export function generateChipLabel(title, multi, chosen, choices) {
  const firstChosen = multi ? chosen[0] : chosen;
  const selected = choices.find(f => f.value === firstChosen);

  if (!multi && firstChosen) {
    return `${title}: ${selected.label}`;
  }

  if (multi && chosen.length > 0) {
    return `${title} +${chosen.length}`;
  }

  return title;
}

export function addChoiceToChosen(chosen, multi, choice) {
  if (multi) {
    if (chosen.indexOf(choice) === -1) {
      chosen.push(choice);
      return chosen;
    }

    return chosen.filter(f => f !== choice);
  }

  return choice;
}
