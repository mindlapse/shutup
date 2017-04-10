import React, {Component, PropTypes} from "react"
import {Dimensions, StyleSheet, Text, TouchableHighlight, View} from "react-native"
import ShutButton from "./ShutButton"
import prettyMs from "pretty-ms"

class Attendee extends Component {

    render() {
        const text = style.text
        console.log(this.props.time)

        return (
            <View style={style.outer}>
                <View style={[{flex:1}, style.closeButton]}>
                    <ShutButton onPress={() => this.props.onRemove(this.props.name)} text="X" color="#192127"/>
                </View>
                <View style={[{flex:3}]}>
                    <Text style={[text]}>{prettyMs(this.props.time)}</Text>
                </View>
                <View style={[{flex:4}]}>
                    <TouchableHighlight onPress={() => this.props.onStart(this.props.name)}>
                        <Text style={[text]}>{this.props.name}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const width = Dimensions.get('window').width;

const style = StyleSheet.create({
    outer : {
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,.5)',
        width:width,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        height:60
    },
    text : {
        paddingLeft:5,
        fontSize:30,
        color:'#FEF',
    },
    closeButton : {

    }
})

Attendee.propTypes = {

    name : PropTypes.string.isRequired,
    time : PropTypes.number.isRequired,
    onRemove : PropTypes.func.isRequired,
}

export default Attendee
