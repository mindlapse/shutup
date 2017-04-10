import {
    SELECT_MEETING_DURATION,
    SET_MEETING_DURATION,
    ADD_ATTENDEE,
    SET_ATTENDEE_MODAL_VISIBLE,
    REMOVE_ATTENDEE,
    START_TIMER,
    UPDATE_TIMER,
    STOP_TIMER
} from './actionTypes'


export function selectMeetingDuration(select) {
    return {
        type: SELECT_MEETING_DURATION,
        select
    }
}

export function setMeetingDuration(duration) {
    console.log("Setting meeting duration to " + duration)
    return {
        type: SET_MEETING_DURATION,
        duration
    }
}

export function setAttendeeModalVisible(visible) {
    return {
        type : SET_ATTENDEE_MODAL_VISIBLE,
        visible
    }
}

export function addAttendee(name) {
    return {
        type : ADD_ATTENDEE,
        name
    }
}

export function removeAttendee(name) {
    return {
        type : REMOVE_ATTENDEE,
        name
    }
}


// Start the talk timer for an attendee
export function startTimer(name) {
    return {
        type : START_TIMER,
        name
    }
}

// Update timer for the current talker
export function updateTimer() {
    return {
        type : UPDATE_TIMER
    }
}

// Stop timer
export function stopTimer() {
    return {
        type : STOP_TIMER
    }
}

