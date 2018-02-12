import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { objToArray } from '../../helpers';
import { userSortMethods } from '../../redux/actions';

import Header from './GroupHeader';
import Row from './GroupRow';

const Group = ({ user, members, sortMethod }) => {
  const sortedMembers = objToArray(members).sort(userSortMethods[sortMethod]);

  return (
    <View style={{ height: '100%' }}>
      <Header sortMethod={sortMethod} />
      <ScrollView>
        {sortedMembers.map(member => {
          // Anchor current user info at top of view
          const isUser = member.key === user.uid;

          if (isUser) {
            return (
              <Row
                key={member.key}
                isUser={isUser}
                uid={member.key}
                userAgenda={user.agenda}
                {...member}
              />
            );
          }
        })}
        {sortedMembers.map(member => {
          const isUser = member.key === user.uid;

          if (member && !isUser) {
            return (
              <Row
                key={member.key}
                isUser={isUser}
                uid={member.key}
                userAgenda={user.agenda}
                {...member}
              />
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default connect(({ user, group }) => ({
  members: group.members,
  sortMethod: group.sortMethod,
  user,
}))(Group);
