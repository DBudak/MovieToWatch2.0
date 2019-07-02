export default function config(state = {}, action) {
    switch (action.type) {
        case 'RECEIVED_CONFIG':
            return Object.assign({}, state, { received: true, data: action.config })
        default:
            return state;
    }
}; 