import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Route } from 'react-router-native';
import { connect } from 'react-redux';
import styles from './styles';

/* Components */
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Group from './components/Group/Group';
import MapViewer from './components/MapViewer/MapViewer';
import Agenda from './components/Agenda/Agenda';
import Schedule from './components/Schedule/Schedule';

class App extends Component {
  render() {
    const { menuVisible, menuItems, history } = this.props;

    return (
      <View style={styles.container}>
        <Header />
        <Route path="/map" component={MapViewer} />
        <Route path="/group" component={Group} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/schedule" component={Schedule} />
        {/* <Route path="/choosevenue" component={ChooseVenue}/> */}
        {/* <Route path="/creategroup" component={CreateGroup}/> */}
        {menuVisible && <Menu menuItems={menuItems} history={history} />}
      </View>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default connect((store) => ({
  menuVisible: store.menu.menuVisible,
  menuItems: store.menu.menuItems
}))(App);
