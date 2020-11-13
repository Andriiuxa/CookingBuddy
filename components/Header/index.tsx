import React from "react";
import { StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  titleText: {
    marginTop: 24,
    fontSize: 24,
    padding: 12,
    fontWeight: "bold",
    backgroundColor: "lightblue",
  },
});

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => (
  <Text style={styles.titleText}>{text}</Text>
);

export default Header;
