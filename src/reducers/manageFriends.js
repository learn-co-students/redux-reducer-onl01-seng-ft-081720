let state = {
  friends: []
}
export function manageFriends(state, action){

    
    switch (action.type) {
      case 'ADD_FRIEND':
        return {...state, friends: [...state.friends, action.friend]}
      case 'REMOVE_FRIEND':
        // console.log(state.friends.find(friend => friend.id === action.id))
        const removeThisFriendIndex = state.friends.indexOf(state.friends.find(friend => friend.id === action.id))

        return {...state, friends: state.friends.filter((friend, index) => index !== removeThisFriendIndex)}

      default:
        return state;
    }
  


}
