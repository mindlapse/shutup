import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { View, Modal, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Picker from 'react-native-wheel-picker'
import {
    selectMeetingDuration,
    setMeetingDuration,
} from '../redux/actions'


class MeetingTimeModal extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Modal animationType='slide'
                       transparent={true}
                       visible={this.props.visible}
                       onRequestClose={this.props.closeModal}
                >
                    <View
                        style={[styles.container]}>
                        <View style={[styles.innerContainer]}>
                            <Text style={styles.title}>Meeting Duration</Text>
                            <Picker style={[styles.picker]} selectedValue={this.props.duration}
                                    onValueChange={(duration) => this.props.setDuration(duration)}
                                    itemStyle={{color:"white", fontSize:35}}>
                                {this.props.durations.map(dur =>
                                    (<Picker.Item key={dur} label={dur + " mins"} value={dur} />)
                                )}
                            </Picker>
                            <View style={styles.closeButtonContainer}>
                                <TouchableHighlight style={styles.closeButton} onPress={this.props.closeModal}>
                                    <Text style={styles.closeButtonText}>Submit</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

/*
 */
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : 'rgba(0,0,0,.5)',
    },
    innerContainer : {
        backgroundColor:'#3f0e0a',
        alignItems:'center',
        paddingTop:30,
    },
    picker: {
        height:150,
        width: 300,
        marginTop:30,
        marginBottom:30,
    },
    title: {
        fontSize:25,
        color:"white",
    },
    closeButtonContainer: {
        height:100, flexDirection:'column', justifyContent:'center', alignItems:'center'
    },
    closeButton: {
        width:250,
        height:50,
        backgroundColor:"rgba(255,255,255,0.25)",
    },
    closeButtonText: {
        color:"white",
        textAlign:"center",
        fontSize:30,
    }
})


MeetingTimeModal.propTypes = {
    visible : PropTypes.bool.isRequired,
    closeModal : PropTypes.func.isRequired,
    setDuration : PropTypes.func.isRequired,
    duration : PropTypes.number.isRequired,
    durations : PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default connect(
    (state) => ({
        visible : state.meetingDuration.select,
        duration : state.meetingDuration.duration,
        durations : state.meetingDuration.durations
    }),
    (dispatch) => ({
        closeModal : () => dispatch(selectMeetingDuration(false)),
        setDuration : (duration) => dispatch(setMeetingDuration(duration))
    })
)(MeetingTimeModal)