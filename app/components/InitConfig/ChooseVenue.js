import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';

import styles from '../../styles';
import localStyles from './configStyles';

/*  Actions  */
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
    console.log("venues in choose venue", venues)

    return (
      <View style={localStyles.main}>
        <View style={localStyles.header}>
          <Text style={localStyles.headerText}>
            {'Select a Venue'.toUpperCase()}
          </Text>
        </View>
        <ScrollView>
          {Object.keys(venues).map((key, index) => {
            const { name, thumbnail } = venues[key];

            return (
              <Link key={index} to="/createGroup">
                <View
                  onClick={() => updateVenueId(key)}>
                  <Image
                    style={localStyles.thumbnail}
                    source={{ uri: thumbnail }}>
                    <View>
                      <Text style={localStyles.row}>
                        {name}
                      </Text>
                    </View>
                  </Image>
                </View>
              </Link>
            );
          })}
        </ScrollView>
        <View style={localStyles.footer}>
          <View>
            <Link
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              to="/creategroup">
              <Text style={{ fontSize: 16, color: 'white' }}>
                Skip
              </Text>
            </Link>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(store => ({
	venues: store.venue.venues
}))(ChooseVenue)
