
function bootstrapDefaultState() {
  return {
    provider: 'http://192.168.170.85:3333/',
  };
}

export default (state = bootstrapDefaultState()) => {
  return state;
}
