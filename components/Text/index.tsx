import React from "react";
import { Platform, Text, StyleSheet, TextStyle } from "react-native";

interface Props {
  style?: TextStyle;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "Roboto",
    color: "black",
  },
});

const StyledText: React.FC<Props> = ({ children, style }) => (
  <Text style={Object.assign(styles.text, style)}>{children}</Text>
);

export default StyledText;
