import { createStore, combineReducers } from 'redux'
import meetingDuration from './reducers/meetingDuration'
import attendees from './reducers/attendees'
import attendeeModal from './reducers/attendeeModal'

export default createStore(combineReducers({
    meetingDuration,
    attendees,
    attendeeModal
}))

