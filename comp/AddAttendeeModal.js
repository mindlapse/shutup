import React, { Component, PropTypes } from 'react';
import { View, Modal, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setAttendeeModalVisible, addAttendee } from '../redux/actions'
import ShutButton from "./ShutButton"

class AddAttendeeModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : ""
        }
        this._updateName = this._updateName.bind(this)
    }

    _updateName(text) {
        this.setState({ name : text })
    }

    render() {
        return (
            <View>
                <Modal animationType='slide'
                       transparent={true}
                       visible={this.props.visible}
                       onRequestClose={this.props.closeModal}
                >
                    <View style={style.view}>
                        <Text style={[style.nameLabel]}>Attendee name</Text>
                        <TextInput style={[style.nameInput]} onChangeText={this._updateName} />
                        <View style={style.buttonRow}>
                            <View style={{flex:1}} >
                                <ShutButton onPress={() => this.props.addAttendee(this.state.name)} text="OK" color="#122423" />
                            </View>
                            <View style={{flex:2}} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}



const style = StyleSheet.create({
    view: {
        height: 200,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#122423',
    },

    nameLabel : {
        fontSize : 30,
        color: '#FFF',
    },

    nameInput : {
        height:50,
        color:'#FFF',
        fontSize:20
    },

    buttonRow : {
        marginTop:20,
        marginRight:20,
        height:50,
        flexDirection:"row",
    }
});


AddAttendeeModal.propTypes = {
    visible : PropTypes.bool.isRequired,
    closeModal : PropTypes.func.isRequired,
}

export default connect(
    (state) => ({
        visible : state.attendeeModal.visible
    }),
    (dispatch) => ({
        closeModal : () => dispatch(setAttendeeModalVisible(false)),
        addAttendee : (name) => {
            dispatch(addAttendee(name))
            dispatch(setAttendeeModalVisible(false))
        }
    }),
)(AddAttendeeModal);