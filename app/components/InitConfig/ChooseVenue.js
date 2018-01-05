import React, { Component } from 'react';
import { Image, ScrollView, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-native';

import configStyles from './configStyles';

import {
  fetchVenues,
  setVenues,
  updateVenueId
} from '../../redux/actions';

class ChooseVenue extends Component {
  componentDidMount() {
    fetchVenues(setVenues);
  }

  render() {
    const { venues = {} } = this.props;

    return (
      <View style={configStyles.main}>
        <View style={configStyles.header}>
          <Text style={configStyles.headerText}>
            {'Select a Venue'.toUpperCase()}
          </Text>
        </View>
        <ScrollView>
          {Object.keys(venues).map(key => {
            const { name, thumbnail } = venues[key];

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
                      <Text style={configStyles.row}>
                        {name}
                      </Text>
                    </View>
                  </Image>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
        <View style={configStyles.footer}>
          <Link to="/create-group">
            <Text style={{ fontSize: 16, color: 'white' }}>
              Skip
            </Text>
          </Link>
        </View>
      </View>
    );
  }

  handleVenueClick = key => {
    updateVenueId(key);
    this.props.history.push('create-group');
  }
}

export default withRouter(connect(store => ({
	venues: store.venue.venues
}))(ChooseVenue));
