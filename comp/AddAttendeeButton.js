import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux'
import { setAttendeeModalVisible } from '../redux/actions'
import ShutButton from "./ShutButton"

class AddAttendeeButton extends Component {

    render() {
        return (
            <ShutButton onPress={this.props.onPress} text="+ ATTENDEE" color="#1E113F" />
        )
    }
}


AddAttendeeButton.propTypes = {
    onPress: PropTypes.func
}

export default connect(
    null,
    (dispatch) => ({
        onPress : () => dispatch(setAttendeeModalVisible(true))
    })
)(AddAttendeeButton)