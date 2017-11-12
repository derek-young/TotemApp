import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import groupStyles from './groupStyles';

import Header from './Header';
import Row from './Row';

const Group = ({ user, members }) => (
  <View style={{ height: '100%' }}>
    <Header />
    <ScrollView>
      {Object.keys(members).map(userKey => {
        // Anchor current user info at top of view
        const member = members[userKey];
        if (userKey === user.uid) {
          return (
            <Row key={userKey} member={member} uid={userKey} />
          );
        }
      })}
      {Object.keys(members).map(userKey => {
        const member = members[userKey];
        if (member && userKey !== user.uid) {
          return (
            <Row key={userKey} member={member} uid={userKey} />
          );
        }
      })}
    </ScrollView>
  </View>
);

export default connect((store) => ({
  user: store.user,
  members: store.group.members
}))(Group);
