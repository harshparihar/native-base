import React, { Component } from "react";
import Expo from "expo";
import { Image } from "react-native";
// import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { Container, Header, Content, Picker, Form } from "native-base";

import { Router, Scene } from 'react-native-router-flux';

import PageOne from './src/pageOne';
import PageTwo from './src/pageTwo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}
