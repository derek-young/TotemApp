import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import profileStyles from './profileStyles';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogout: false,
      showPrivacyPolicy: false,
      showTerms: false
    };

    this.sections = [
      {
        header: 'My Account',
        buttons: [
          { label: 'Logout', action: () => console.log('logout') }
        ]
      },
      {
        header: 'Additional Information',
        buttons: [
          { label: 'Terms of Service', action: () => console.log('terms') },
          { label: 'Privacy Policy', action: () => console.log('privacy') }
        ]
      }
    ];
  }

  render() {
    const { name, img } = this.props;

    return (
      <View style={{ height: '100%' }}>
        <View style={profileStyles.top}>
          <Image
            source={{ uri: img }}
            style={profileStyles['profile-photo']}
          />
          <Text style={profileStyles.name}>
            {name}
          </Text>
        </View>
        <View style={profileStyles.bottom}>
          {this.sections.map(({ header, buttons }) => (
            <View key={header} style={profileStyles.section}>
              <View style={profileStyles.header}>
                <Text style={profileStyles['header-text']}>
                  {header}
                </Text>
              </View>
              {buttons.map(({ label, action }) => (
                <View key={label} style={profileStyles.row}>
                  <TouchableOpacity
                    onPress={action}
                    style={profileStyles.button}
                  >
                    <Text>
                      {label}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default connect(({ user }) => ({
  ...user
}))(Profile);
