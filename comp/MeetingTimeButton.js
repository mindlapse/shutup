import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux'
import { View, Button } from 'react-native'
import { selectMeetingDuration } from '../redux/actions'
import ShutButton from "./ShutButton"

class MeetingTimeButton extends Component {

    render() {
        return (
            <ShutButton onPress={this.props.onPress} text={"MINS " + this.props.mins} color="#15333F"/>
        )
    }
}

MeetingTimeButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    mins: PropTypes.number.isRequired,
}


export default connect(
    (state) => ({
        mins : state.meetingDuration.duration
    }),
    (dispatch) => ({
        onPress : () => dispatch(selectMeetingDuration(true))
    })
)(MeetingTimeButton)