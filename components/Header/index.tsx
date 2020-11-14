import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
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
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{text}</Text>
  </View>
);

export default Header;
