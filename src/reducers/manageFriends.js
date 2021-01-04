export function manageFriends(state, action){
    switch (action.type){
        case "ADD_FRIEND":
            console.log(state)
            console.log(action.friend)
            return {
                friends: [...state.friends, action.friend]
            }
        case "REMOVE_FRIEND":
            let newArray = state.friends.filter(friend => friend.id !== action.id)
            return {
                friends: newArray
            }
        default:
            return state
    }
}
