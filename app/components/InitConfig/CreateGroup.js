import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { withRouter } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import configStyles from './configStyles';

import { createGroup, joinGroup } from '../../redux/actions';

class ChooseVenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idError: '',
      nameError: '',
      groupId: '',
      groupName: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ height: '100%' }}>
        <View style={configStyles.header}>
          <View style={configStyles['group-header']}>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={configStyles.headerText}>
                <Icon name="angle-left" size={40} />
              </Text>
            </TouchableOpacity>
            <Text style={configStyles.headerText}>
              {'Join or Create a Group'.toUpperCase()}
            </Text>
            <Text style={{ width: 15 }} />
          </View>
        </View>
        <View style={configStyles.body}>
          <View style={{ width: '80%' }}>
            <View style={configStyles['input-wrapper']}>
              <TextInput
                style={configStyles.input}
                placeholder="Group Name"
                onChangeText={this.handleNameChange}
              />
            </View>
            <TouchableOpacity
              onPress={this.handleCreateClick}
              style={configStyles.button}
            >
              <Text style={configStyles['button-text']}>
                Create
              </Text>
            </TouchableOpacity>
            <Text style={configStyles.errorText}>
              {this.state.nameError}
            </Text>
          </View>
          <View style={{ width: '80%' }}>
            <View style={[ configStyles['input-wrapper'], { marginTop: 10 }]}>
              <TextInput
                autoCapitalize="characters"
                style={configStyles.input}
                placeholder="Group ID"
                onChangeText={this.handleIDChange}
              />
            </View>
            <TouchableOpacity
              onPress={this.handleJoinGroup}
              style={configStyles.button}
            >
              <Text style={configStyles['button-text']}>
                Join
              </Text>
            </TouchableOpacity>
            <Text style={configStyles.errorText}>
              {this.state.idError}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  handleCreateClick = () => {
    const { groupName } = this.state;

    if (groupName) {
      createGroup(groupName)
      .then(() => this.props.history.push('group'));
    } else {
      this.setState({ nameError: 'Please enter a name for your group' });
    }
  }

  handleJoinGroup = () => {
    const { groupId } = this.state;

    if (groupId && groupId.length === 8) {
      joinGroup(groupId, this.setIdError)
      .then(() => this.props.history.push('group'))
      .catch(err => this.setIdError(err));
    } else {
      this.setIdError('Please enter a valid group ID');
    }
  }

  handleIDChange = text => (
    this.setState({
      idError: '',
      groupId: text
    })
  )

  handleNameChange = text => (
    this.setState({
      nameError: '',
      groupName: text
    })
  )

  goBack = () => this.props.history.push('choose-venue')

  setIdError = error => this.setState({ idError: error });
}

export default withRouter(ChooseVenue);
