import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 40,
    fontSize: 24,
    padding: 12,
    fontWeight: "bold",
  },
});

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  </View>
);

export default Header;
