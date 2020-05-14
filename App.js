import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      uri1: require("./src/images/dice1.png"),
      uri2: require("./src/images/dice1.png"),
    };
  }

  getRandomValue = () => {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    return [num1, num2];
  };

  playBtnPressed = () => {
    let number = this.getRandomValue();
    switch (number[0]) {
      case 1:
        this.setState({
          uri1: require("./src/images/dice1.png"),
        });
        break;
      case 2:
        this.setState({
          uri1: require("./src/images/dice2.png"),
        });
        break;
      case 3:
        this.setState({
          uri1: require("./src/images/dice3.png"),
        });
        break;
      case 4:
        this.setState({
          uri1: require("./src/images/dice4.png"),
        });
        break;
      case 5:
        this.setState({
          uri1: require("./src/images/dice5.png"),
        });
        break;
      case 6:
        this.setState({
          uri1: require("./src/images/dice6.png"),
        });
        break;
    }

    switch (number[1]) {
      case 1:
        this.setState({
          uri2: require("./src/images/dice1.png"),
        });
        break;
      case 2:
        this.setState({
          uri2: require("./src/images/dice2.png"),
        });
        break;
      case 3:
        this.setState({
          uri2: require("./src/images/dice3.png"),
        });
        break;
      case 4:
        this.setState({
          uri2: require("./src/images/dice4.png"),
        });
        break;
      case 5:
        this.setState({
          uri2: require("./src/images/dice5.png"),
        });
        break;
      case 6:
        this.setState({
          uri2: require("./src/images/dice6.png"),
        });
        break;
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <View>
            <Image
              style={{ height: 175, width: 175 }}
              source={this.state.uri1}
            />
          </View>
          <View>
            <Image
              style={{ height: 175, width: 175 }}
              source={this.state.uri2}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={this.playBtnPressed}>
            <Text style={styles.gameBtn}>Roll Dice</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "purple",
    flex: 1,
  },
  container1: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  container2: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  gameBtn: {
    marginTop: 25,
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
});
