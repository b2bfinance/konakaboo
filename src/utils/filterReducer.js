import { FILTERS_GROUP_RESET, FILTERS_RESET, FILTERS_TOGGLE } from "./actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTERS_TOGGLE: {
      const newFilters = state.map(filter => {
        if (filter.key === action.filter.key) {
          // Check the selected store to see if we have this filter selected.
          const isAlreadySet =
            filter.selected.indexOf(action.choice.value) !== -1;

          if (isAlreadySet) {
            // We already have this filter selected so we need to remove it
            // from the selected store.
            return {
              ...filter,
              selected: filter.selected.filter(
                value => value !== action.choice.value
              ),
            };
          }

          if (filter.multiChoice) {
            // Filter is not already selected and is a multiChoice so we
            // need to add it to the already present selected.
            return {
              ...filter,
              selected: [...filter.selected, action.choice.value],
            };
          }

          // By the power of deduction we know this choice is not set
          // and it's not a multiChoice so we'll create an array with
          // only this choice.
          return {
            ...filter,
            selected: [action.choice.value],
          };
        }

        // Simply return filters that are not related to our action.
        return filter;
      });

      return newFilters;
    }
    case FILTERS_RESET: {
      const newFilters = state.map(filter => ({
        ...filter,
        selected: [],
      }));

      return newFilters;
    }
    case FILTERS_GROUP_RESET: {
      const newFilters = state.map(filter => {
        if (filter.key === action.filter.key) {
          return {
            ...filter,
            selected: [],
          };
        }

        return filter;
      });

      return newFilters;
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
