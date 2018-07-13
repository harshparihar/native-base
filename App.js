import React from "react";
import Expo from "expo";
import { Container, Header, Content, Accordion, View, Text, Icon } from "native-base";

const dataArray = [
  { title: "First Element", content: "You are check first element" },
  { title: "Second Element", content: "You are checking second element" },
  { title: "Third Element", content: "You are checking third element" }
];

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

  _renderHeader(title, expanded) {
    return (
      <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}>
        <Text style={{ fontWeight: "600" }}>
          {" "}{title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(content) {
    return (
      <Text style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}>
        {content}
      </Text>
    );
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}