import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import Attendee from './Attendee'
import { removeAttendee, startTimer, updateTimer } from '../redux/actions'
// import { getAttendeeNames } from '../redux/reducers/attendees'
// import timer from 'react-native-timer'

class AttendeeList extends Component {

    intervalId = null

    componentDidMount() {
        console.log("Calling componentDidMount")
        this.intervalId = setInterval(this.props.updateTimer, 1000)
    }

    componentWillUnmount() {
        console.log("Clearing interval")
        clearInterval(this.intervalId)
    }

    render() {

        return (
            <ListView
                dataSource={this.props.attendeesDataSource}
                renderRow={(attendee, section, rowId) => {
                    console.log(attendee)
                    let time = parseInt((attendee.totalTalkTime + attendee.currentTalkTime)/1000)*1000
                    return (<Attendee
                        name={attendee.name}
                        time={time}
                        onRemove={this.props.onRemove}
                        onStart={this.props.onStart}
                    />)
                }}>
            </ListView>
        )
    }

}

React.propTypes = {
    attendees : PropTypes.arrayOf(PropTypes.object).isRequired,
    onRemove : PropTypes.func.isRequired,
    updateTimer : PropTypes.func.isRequired,
    onStart : PropTypes.func.isRequired
}

export default connect(
    (state) => {
        console.log(state.attendees.attendees)
        return {
            attendeesDataSource : new ListView.DataSource(
                {rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(state.attendees.attendees)

        }
    },
    (dispatch) => ({
        onRemove : (name) => dispatch(removeAttendee(name)),
        updateTimer : () => dispatch(updateTimer()),
        onStart : (name) => dispatch(startTimer(name))
    }),
)(AttendeeList)