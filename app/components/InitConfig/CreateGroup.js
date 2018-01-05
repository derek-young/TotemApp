import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { withRouter } from 'react-router-native';

import styles from '../../styles';
import configStyles from './configStyles';

/*  Actions  */
import {
  createGroup
} from '../../redux/actions';

class ChooseVenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      groupName: '',
    };
  }

  render() {
    return (
      <View style={configStyles.main}>
        <View style={configStyles.header}>
          <Text style={configStyles.headerText}>
            {'Join or Create a Group'.toUpperCase()}
          </Text>
        </View>
        <View style={configStyles.body}>
          <View style={configStyles.inputWrapper}>
            <TextInput
              style={configStyles.input}
              placeholder="Group Name"
              onChangeText={this.handleValueChange}
            />
            <Text style={configStyles.errorText}>
              {this.state.error}
            </Text>
          </View>
          <TouchableOpacity
            onPress={this.handleCreateClick}
            style={[ styles.button, configStyles.button ]}
          >
            <Text>Create</Text>
          </TouchableOpacity>
        </View>
        {/*  TODO: Add cards for groups shared by friends */}
      </View>
    );
  }

  handleCreateClick = () => {
    const { groupName } = this.state;

    if (this.state.groupName) {
      createGroup(groupName)
      .then(() => {
        this.props.history.push('group');
      });
    } else {
      this.setError('Please enter a name for your group');
    }
  }

  handleValueChange = text => {
    this.setError('');
    this.setState({ groupName: text });
  }

  setError = error => {
    this.setState({
      error
    });
  }
}

export default withRouter(ChooseVenue);
