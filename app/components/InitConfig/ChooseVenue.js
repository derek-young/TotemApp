import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import configStyles from './configStyles';

import {
  fetchVenues,
  setVenues,
  updateVenueId,
  venueSortMethods,
} from '../../redux/actions';

import SortByPopover from './SortByPopover';

class ChooseVenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      showSortBy: false,
    };
  }

  componentDidMount() {
    fetchVenues(setVenues);
  }

  render() {
    const { sortByOption, venues = {} } = this.props;
    const { showSortBy } = this.state;
    const sortAction = venueSortMethods[sortByOption];
    const displayVenues = Object.values(venues).sort(sortAction).filter(this.filterVenues);

    return (
      <View style={configStyles.main}>
        <View style={[ configStyles.header, { paddingBottom: 13 } ]}>
          <Text style={configStyles.headerText}>
            {'Select a Venue'.toUpperCase()}
          </Text>
          <View style={configStyles.options}>
            <View style={configStyles['filter-wrapper']}>
              <View style={configStyles['icon-wrapper']}>
                <Icon name="search" size={16} color="lightgrey" />
              </View>
              <TextInput
                style={configStyles.filter}
                placeholder="Filter"
                placeholderTextColor="lightgrey"
                onChangeText={this.handleValueChange}
              />
            </View>
            <TouchableHighlight
              onPress={this.toggleSortByOverlay}
              style={configStyles['menu-wrapper']}
            >
              <View style={configStyles['icon-wrapper']}>
                <Icon name="bars" size={20} color="lightgrey" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView>
          {displayVenues.map(this.renderVenueCard)}
        </ScrollView>
        <View style={configStyles.footer}>
          <Link to="/create-group">
            <Text style={{ fontSize: 16, color: 'white' }}>
              Skip
            </Text>
          </Link>
        </View>
        {
          showSortBy &&
          <SortByPopover
            close={this.toggleSortByOverlay}
            selectedKey={sortByOption}
          />
        }
      </View>
    );
  }

  filterVenues = ({ name }) => {
    const { filterText } = this.state;
    return !filterText.length || name.toLowerCase().includes(filterText);
  }

  handleValueChange = text => this.setState({ filterText: text.toLowerCase() })

  handleVenueClick = key => {
    updateVenueId(key);
    this.props.history.push('create-group');
  }

  renderVenueCard = venue => {
    const { key, name, thumbnail } = venue;

    return (
      <TouchableHighlight
        key={key}
        onPress={() => this.handleVenueClick(key)}>
        <View>
          <Image
            style={configStyles.thumbnail}
            source={{ uri: thumbnail }}
          >
            <View style={configStyles['image-overlay']}>
              <Text numberOfLines={3} style={configStyles['row-text']}>
                {name}
              </Text>
            </View>
          </Image>
        </View>
      </TouchableHighlight>
    );
  }

  toggleSortByOverlay = () => (
    this.setState({ showSortBy: !this.state.showSortBy })
  )
}

export default withRouter(connect(({ config, venue }) => ({
  sortByOption: config.sortByOption,
	venues: venue.venues
}))(ChooseVenue));
