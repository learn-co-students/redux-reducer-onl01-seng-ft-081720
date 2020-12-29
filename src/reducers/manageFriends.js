export function manageFriends(state = {numberOfFriends: 0}, action) {
  // switch can take multiple case statement arguments
  switch(action.type) {
    case "ADD_FRIEND":
      return (
        {...state,
          friends: [
            ...state.friends,
            action.friend
          ]
        }
      )

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
      return (
        {...state,
          friends: [
            ...state.friends.slice(0, removalIndex),
            ...state.friends.slice(removalIndex + 1)
          ]
        }
      )
      
    default:
      return state;
  }
}
