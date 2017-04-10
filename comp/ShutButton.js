import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'

class ShutButton extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableHighlight style={[style.box, {backgroundColor:this.props.color}]} onPress={this.props.onPress}>
                    <Text style={style.text}>{this.props.text}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const style = StyleSheet.create({
    box : {
        height: 40,
        flex: 1,
        justifyContent : 'center',
        // backgroundColor : 'rgba(0,0,0,.1)',
    },
    text : {
        color : 'white',
        textAlign : 'center',
        fontSize:20
    }
})


ShutButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
}

export default ShutButton