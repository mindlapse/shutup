import {
    SELECT_MEETING_DURATION,
    SET_MEETING_DURATION
} from '../actionTypes'

const initial = {
    select : false,
    duration : 25,
    durations : [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
}


export default (state = initial, action) => {

    let newState = state;
    switch (action.type) {
        case SELECT_MEETING_DURATION:
            let select = action.select;
            newState = {
                ...state, select
            }
            break;
        case SET_MEETING_DURATION:
            let duration = action.duration;
            newState = {
                ...state, duration
            }
            console.log("Created new state")
            console.log(newState)
            break;
        default:
            break;
    }
    return newState;

}