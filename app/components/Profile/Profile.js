import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import profileStyles from './profileStyles';

import LogoutPopover from './LogoutPopover';
import PrivacyPopover from './PrivacyPopover';
import TermsPopover from './TermsPopover';

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
          { label: 'Logout', popover: 'showLogout' }
        ]
      },
      {
        header: 'Additional Information',
        buttons: [
          { label: 'Terms of Service', popover: 'showTerms' },
          { label: 'Privacy Policy', popover: 'showPrivacyPolicy' }
        ]
      }
    ];
  }

  render() {
    const { name, img } = this.props;
    const { showLogout, showPrivacyPolicy, showTerms } = this.state;

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
              {buttons.map(({ label, popover }) => (
                <View key={label} style={profileStyles.row}>
                  <TouchableOpacity
                    onPress={() => this.openPopover({ popover })}
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
        {
          showLogout &&
          <LogoutPopover
            close={this.closeLogout}
            show={showLogout}
          />
        }
        {
          showPrivacyPolicy &&
          <PrivacyPopover
            close={this.closePrivacy}
            show={showPrivacyPolicy}
          />
        }
        {
          showTerms &&
          <TermsPopover
            close={this.closeTerms}
            show={showTerms}
          />
        }
      </View>
    );
  }

  closeLogout = () => (
    this.setState({
      showLogout: false
    })
  )

  closePrivacy = () => (
    this.setState({
      showPrivacyPolicy: false
    })
  )

  closeTerms = () => (
    this.setState({
      showTerms: false
    })
  )

  openPopover = ({ popover }) => (
    this.setState({
      [popover]: true
    })
  )
}

export default connect(({ user }) => ({
  ...user
}))(Profile);
