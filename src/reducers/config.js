const initialState = {
  cta: 'Get Deal'
};

export default (state, action) => {
  switch (action.type) {
    default:
      return {
        ...initialState,
        ...state
      };
  }
};
