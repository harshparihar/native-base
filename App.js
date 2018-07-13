import React from "react";
import Expo from "expo";
import { Image } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, View, Text, Button, Icon, ListItem, CheckBox } from "native-base";

export default class App extends React.Component {
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
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}