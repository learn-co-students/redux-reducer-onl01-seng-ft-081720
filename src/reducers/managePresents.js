export function managePresents(state = {numberOfPresents: 0}, action) {
  // Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.
  switch(action.type) {
    case "INCREASE":
      return Object.assign({}, state, {
        numberOfPresents: state.numberOfPresents + 1
      });

      default: 
      return state;
  }
}
