import _ from 'underscore'
import {
    ADD_ATTENDEE,
    REMOVE_ATTENDEE,
    START_TIMER,
    UPDATE_TIMER,
    STOP_TIMER,
} from '../actionTypes'


const getAttendee = (state, name) => _.find(state.attendees, (att) => att.name === name)

const getAttendeeIndex = (state, name) => state.attendees.map((item) => item.name).indexOf(name)

const initial = {
    talkStart : null,
    talkerIndex : -1,
    attendees : {},
};




export default (state = initial, action) => {

    console.log("Action: " + action.type)
    let newState = state;

    switch (action.type) {


        case ADD_ATTENDEE:
            console.log(action)
            newState = {
                ...state,
                attendees: [...state.attendees, {
                    name : action.name,
                    totalTalkTime : 0,
                    currentTalkTime : 0
                }]
            }
            break;


        case REMOVE_ATTENDEE:
            console.log(action)
            const removeIndex = getAttendeeIndex(state, action.name);
            console.log("Removing index " + 0)
            console.log("slice s: " + state.attendees.slice(0, removeIndex))
            console.log("slice e: " + state.attendees.slice(removeIndex+1))
            newState = {
                ...state,
                attendees : [
                    ...state.attendees.slice(0, removeIndex),
                    ...state.attendees.slice(removeIndex+1),
                ]
            }
            if (state.talkerIndex === removeIndex) {
                newState.talkerIndex = -1
                newState.talkStart = null
            } else if (state.talkerIndex > removeIndex) {
                newState.talkerIndex--
            }
            console.log("state after remove attendee");
            console.log(newState);
            break;


        case START_TIMER:
            console.log(action)

            newState = stopExistingTalker(state)

            // Get the index of the attendee on whom the timer was started
            let index = getAttendeeIndex(state, action.name)

            // Update the attendee with the new talk start.
            newState = {
                ...newState,
                talkerIndex : index,
                talkStart : new Date().getTime(),
            }

            break;

        case UPDATE_TIMER:
            console.log(action)
            if (state.talkerIndex !== -1) {
                const index = state.talkerIndex;
                const talker = state.attendees[state.talkerIndex]

                newState = {
                    ...state,
                    attendees : [
                        ...state.attendees.slice(0, index),
                        {
                            ...talker,
                            currentTalkTime : new Date().getTime() - state.talkStart
                        },
                        ...state.attendees.slice(index+1)
                    ]
                }
            }
            break;

        case STOP_TIMER:

            newState = stopExistingTalker(state)
            break;
    }

    return newState;
}

function stopExistingTalker(state) {
    let newState = state;
    const index = state.talkerIndex;

    if (index !== -1) {
        const talker = state.attendees[index]

        newState = {
            ...state,
            attendees : [
                ...state.attendees.slice(0, index),
                {
                    ...talker,
                    totalTalkTime : (new Date().getTime() - state.talkStart) + talker.totalTalkTime,
                    currentTalkTime : 0
                },
                ...state.attendees.slice(index+1)
            ],
            talkerIndex : -1,
            talkStart : null
        }
        console.log("newState after stopExistingTalker: ")
        console.log(newState)
    }

    return newState;
}