export function manageFriends(state={friends:[]}, action){
    if (action.type === "ADD_FRIEND") {
        return {friends: [...state.friends,action.friend]}        
    } else if (action.type === "REMOVE_FRIEND") {
        return {friends : state.friends.filter(f => f.id !== action.id)}
    } else return state
}
