import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import MeetingTimeButton from "./comp/MeetingTimeButton"
import AddAttendeeButton from "./comp/AddAttendeeButton"
import MeetingTimeModal from "./comp/MeetingTimeModal"
import AddAttendeeModal from "./comp/AddAttendeeModal"
import AttendeeList from "./comp/AttendeeList"
import { Provider } from 'react-redux'
import store from './redux/store'

export default class shutup extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <View style={{height:100, flexDirection:"row"}}>
                        <MeetingTimeButton />
                        <AddAttendeeButton />
                    </View>
                    <MeetingTimeModal />
                    <AddAttendeeModal />
                    <AttendeeList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#123456',
  }
  /*
  welcome: {
	fontSize: 20,
	textAlign: 'center',
	margin: 10,
  },
  instructions: {
	textAlign: 'center',
	color: '#333333',
	marginBottom: 5,
  },
  */
});

AppRegistry.registerComponent('shutup', () => shutup);
