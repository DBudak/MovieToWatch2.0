export default function genres(state = {}, action) {
    switch (action.type) {
        case 'RECEIVED_GENRES':
            return Object.assign({}, state, { received: true, data: action.genres });
        case 'USER_ADDED_GENRE':
            return Object.assign({}, state, {
                userChoice: state.userChoice.concat([action.id])
            });
        case 'USER_REMOVED_GENRE':
            let index = state.userChoice.indexOf(action.id);
            return Object.assign({}, state, {
                userChoice: state.userChoice
                    .slice(0, index)
                    .concat(state.userChoice.slice(index + 1))
            })
        default:
            return state;
    }
};