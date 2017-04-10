import { SET_ATTENDEE_MODAL_VISIBLE } from "../actionTypes"

const initial = {
    visible : false
}


export default (state = initial, action) => {

    let newState = state;

    switch (action.type) {
        case SET_ATTENDEE_MODAL_VISIBLE:
            console.log(action)
            const visible = action.visible
            newState = { ...state, visible }
            break;
        default:
            break;
    }

    return newState;
}
