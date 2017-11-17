
function loadInitialState() {
  return {
    provider: 'http://192.168.170.85:3333/buy_to_lets@',
  };
}

export default (state = loadInitialState()) => {
  return state;
}
