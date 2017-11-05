import React, { Component } from 'react';
import { Image, ScrollView, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-native';

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
              <TouchableHighlight
                key={index}
                onPress={this.handleVenueClick}>
                <View>
                  <Image
                    style={localStyles.thumbnail}
                    source={{ uri: thumbnail }}>
                    <View style={localStyles['image-overlay']}>
                      <Text style={localStyles.row}>
                        {name}
                      </Text>
                    </View>
                  </Image>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
        <View style={localStyles.footer}>
          <Link to="/creategroup">
            <Text style={{ fontSize: 16, color: 'white' }}>
              Skip
            </Text>
          </Link>
        </View>
      </View>
    );
  }

  handleVenueClick = () => {
    updateVenueId(key);
    this.props.history.push('/createGroup');
  }
}

export default withRouter(connect(store => ({
	venues: store.venue.venues
}))(ChooseVenue));
