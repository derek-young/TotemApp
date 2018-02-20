import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import styles from '../../sharedStyles/styles';
import groupStyles from './groupStyles';

import { objToArray } from '../../helpers';
import { userSortMethods } from '../../redux/actions';

import Header from './GroupHeader';
import Row from './GroupRow';

const Group = ({ id, members, sortMethod, user }) => {
  const sortedMembers = objToArray(members).sort(userSortMethods[sortMethod]);

  return (
    <View style={{ height: '100%' }}>
      <Header
        id={id}
        memberCount={sortedMembers.length}
        sortMethod={sortMethod}
      />
      <ScrollView contentContainerStyle={groupStyles['scroll-view']}>
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
        {
          sortedMembers.length === 1 &&
          <View style={groupStyles.empty}>
            <Text style={styles['info-text']}>
              Users can join this group by entering the group ID above on sign-in.
              This ID is not case-sensitive.
            </Text>
          </View>
        }
      </ScrollView>
    </View>
  );
};

export default connect(({ user, group }) => ({
  id: group.groupId,
  members: group.members,
  sortMethod: group.sortMethod,
  user,
}))(Group);
