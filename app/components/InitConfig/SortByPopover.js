import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setVenueSortOption } from '../../redux/actions';

import configStyles from './configStyles';
import sortByStyles from './sortByStyles';

const options = [
  { key: 'upcoming', label: 'Upcoming', icon: 'calendar' },
  { key: 'alphaAZ', label: 'Alphabetically - Ascending', icon: 'sort-alpha-asc' },
  { key: 'alphaZA', label: 'Alphabetically - Descending', icon: 'sort-alpha-desc' }
];

const SortByPopover = ({ close, selectedKey }) => (
  <Modal transparent>
    <View style={sortByStyles.main}>
      <Text style={configStyles.headerText}>
        Sort By
      </Text>
      {options.map(({ key, label, icon }) => {
        const isSelected = key === selectedKey;

        return (
          <TouchableOpacity
            key={key}
            onPress={() => {
              setVenueSortOption(key);
              close();
            }}
            style={sortByStyles.option}
          >
            <View style={sortByStyles['icon-wrapper']}>
              <Icon name={icon} size={16} color="white" />
              <Text style={sortByStyles['option-text']}>
                {label}
              </Text>
            </View>
            {isSelected && <Icon name="check" size={16} color="white" />}
          </TouchableOpacity>
        );
      })}
    </View>
    <TouchableOpacity onPress={close} style={sortByStyles.cancel}>
      <Text style={{ color: 'white' }}>Cancel</Text>
    </TouchableOpacity>
  </Modal>
);

export default SortByPopover;
