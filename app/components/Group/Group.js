import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Header from './GroupHeader';
import Row from './GroupRow';

const Group = ({ user, members }) => (
  <View style={{ height: '100%' }}>
    <Header />
    <ScrollView>
      {Object.keys(members).map(userKey => {
        // Anchor current user info at top of view
        const member = members[userKey];
        const isUser = userKey === user.uid;

        if (isUser) {
          return (
            <Row
              key={userKey}
              isUser={isUser}
              uid={userKey}
              userAgenda={user.agenda}
              {...member}
            />
          );
        }
      })}
      {Object.keys(members).map(userKey => {
        const member = members[userKey];
        const isUser = userKey === user.uid;

        if (member && !isUser) {
          return (
            <Row
              key={userKey}
              isUser={isUser}
              uid={userKey}
              userAgenda={user.agenda}
              {...member}
            />
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
