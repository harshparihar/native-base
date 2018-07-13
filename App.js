import React from "react";
import Expo from "expo";
import { Image } from "react-native";
import { Container, Header, Content, DeckSwiper, Card, CardItem, Body, View, Text, Button, Icon, Thumbnail, Left } from "native-base";

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./src/assets/images/n1.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('./src/assets/images/n2.jpg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('./src/assets/images/n3.jpg'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('./src/assets/images/n4.jpg'),
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}